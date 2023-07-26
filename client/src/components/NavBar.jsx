import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
const NavBar = ()=> {
  const navigate = useNavigate();
    return (
        <> <Navbar style={{position:"sticky",zIndex:"1",top:0,backgroundColor:"darkgreen"}} variant="dark">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}  >Parks</Navbar.Brand>
          <Nav className="me">
            <Nav.Link onClick={() => navigate("/plants")} >plants</Nav.Link>
            <Nav.Link onClick={() => navigate("/plants")}>myAccount</Nav.Link>
          </Nav>
        </Container>
      </Navbar></>
    );
}
export default NavBar;