import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ParkPage.css";
import AddPlant from "../components/AddPlant";
const ParkPage = () => {
  const navigate = useNavigate();
  //fetching data
  const [currentPark, setCurrentPark] = useState({});
  const [plants, setPlants] = useState([]);
  // eslint-disable-next-line no-unused-vars
  let { id } = useParams();
  useEffect(() => {
    const fetchPark = async () => {
      const response = await fetch(`/parks/${id}`);
      console.log(id);
      const json = await response.json();
      if (response.ok) {
        setCurrentPark(json);
      }
    };
    fetchPark();
  }, []);
  useEffect(() => {
    const fetchPlants = async () => {
      const newPlants = [];

      await Promise.all(
        currentPark.plants.map(async (plant) => {
          const response = await fetch(`/plants/${plant}`);
          const plant_json = await response.json();
          if (response.ok) {
            newPlants.push(plant_json);
          }
        })
      );

      setPlants(newPlants);
    };

    fetchPlants();
    console.log(plants);
  }, [currentPark]);
  return (
    <div className="home">
      <>test2</>
      <span
        style={{
          color: "white",
          position: "fixed",
          left: "20px",
          fontSize: "25px",
          padding: "10px",
          zIndex: "1",
        }}
        onClick={() => navigate("/")}
      >
        Parks
      </span>
      <img className="back" src={currentPark.img} />
      <>{currentPark.name}</>
      <div className="PlantGrid">
        {plants &&
          plants.map((plant) => (
            <>
              {" "}
              <Card
                onClick={() => navigate("/plants/" + plant._id)}
                style={{ width: "55rem", cursor: "pointer" }}
              >
                <Card.Img variant="top" src={plant.img} />
                <Card.Body>
                  <Card.Title>{plant.name}</Card.Title>
                  <Card.Text>{plant.description}</Card.Text>
                </Card.Body>
              </Card>
            </>
          ))}
      </div>
      <AddPlant parkID={ currentPark} currentParkPlants={currentPark.plants}/>
    </div>
  );
};

export default ParkPage;
