import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Home.css";
import NavBar from "../components/NavBar"
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  const navigate = useNavigate();
  //fetching data
  const [parks, setParks] = useState(null);
  useEffect(() => {
    const fetchPlants = async () => {
      const response = await fetch("/parks");

      const json = await response.json();

      if (response.ok) {
        setParks(json);
      }
    };
    fetchPlants();
  }, []);
  return (
    <>
    <Carousel>
    {parks &&
            parks.map((park) => (
        <Carousel.Item interval={7000} key={park._id}>
          <img
            className="d-block w-100"
            height="1000"
            onClick={() => navigate("/parks/" + park._id)}
src={park.img}
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>{park.description}</h3>
            <p>{park.location}</p>
          </Carousel.Caption>
          
        </Carousel.Item>
         ))}
      </Carousel>
      <NavBar />
    <Container>
    <br></br>
      <Row>
        <Col>
          <div className="parkGrid">
          {parks &&
            parks.map((park) => (
              <div
                onClick={() => navigate("/parks/" + park._id)}
                key={park._id}
              >
                <Card style={{ width: "18rem", cursor:"pointer"}}>
                  <Card.Img variant="top" src={park.img} />
                  <Card.Body>
                    <Card.Title>{park.name}</Card.Title>
                    <Card.Text>
                    {park.location}
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br></br>
              </div>
              
            ))}
            </div>
        </Col>
        <Col md="auto">Web scrapper for nature articles </Col>
      </Row>
      
    </Container>
    </>
  );
};

export default Home;
