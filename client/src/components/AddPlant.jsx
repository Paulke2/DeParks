import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button, Modal } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const AddPlant = ({parkID}) => {
  const [show, setShow] = useState(false);
  const [plantType, setPlantType] = useState("");
  const allPlantOptions = ["Tree", "Mushroom", "shrub"];
  //this field is required. we must check that it is not empty
  const [img, setImg] = useState("");
  const [plantDescription, setPlantDescription] = useState("");
  const [plantOptions, setPlantOptions] = useState("");
  const [plantID, setPlantID] = useState(0);
  const [plantName, setPlantName] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [error, setError]= useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = async (event) => {
    event.preventDefault();
    setPlantID(Math.random());
    const plant = { plantName, img, plantDescription, plantID, qr:"blaga" };
    const response = await fetch("/parks/"+parkID, {
      method: "PATCH",
      body: JSON.stringify(plant),
      headers: { "Content-Type": "applocation/json" },
    });
    const json = await response.json();
    if(!response.ok){
        setError(json.error);
    }
    else{
      setError(null);
      console.log("new plant added",json);
    }
    setImg("");
    setPlantDescription("");
    setPlantOptions("");
    setPlantName("");
    setShow(false);
    setPlantID(0);
  };

  return (
    <>
    {console.log(parkID)}
      <Button variant="primary" onClick={handleShow} onHide={handleSave}>
        Post picture
      </Button>

      <Modal size="lg" show={show} >
        <Modal.Header closeButton>
          <Modal.Title>New picture</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          forms to add new Plant. if post is on park page, get park form park
          page
          <Form>
            <Form.Group>
              <Form.Control
                type="text"
                id="create plantType"
                name="Plant Type"
                value={plantType}
                onChange={(event) => setPlantType(event.target.value)}
                autocomplete="off"
                placeholder="Plant Type"
              />
            </Form.Group>
            <Form.Control
              type="img"
              id="new-plant-img"
              name="plant-img"
              value={plantName}
              onChange={(event) => setPlantName(event.target.value)}
              placeholder="img"
            />
            <Form.Group>
              <Form.Control
                type="name"
                id="new-plant-name"
                name="plant-name"
                value={img}
                onChange={(event) => setImg(event.target.value)}
                placeholder="plant name"
              />
              <Form.Control
                type="plantDescription"
                id="plantDescription"
                name="plantDescription"
                value={plantDescription}
                onChange={(event) => setPlantDescription(event.target.value)}
                placeholder="plant location"
              />
              <Form.Select
                value={plantOptions}
                onChange={(event) => setPlantOptions(event.target.value)}
              >
                {allPlantOptions.map((plant_type) => (
                  <option key={plant_type} value={plant_type}>
                    {plant_type}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group></Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default AddPlant;
