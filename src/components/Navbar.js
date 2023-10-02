import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";

function NavBar() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="#home">
          {/* <div className="image-container text-center d-flex align-self-center  justify-self-end ms-auto hero-image-container"> */}
          <Image
            id="hero-image"
            src="/logoblue.png"
            height={50}
            width={50}
            // objectFit="cover"
            alt="logo"
          />
          {/* </div> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Services</Nav.Link>
            <Nav.Link href="#home">My Work</Nav.Link>
            <Nav.Link href="#home">About Me</Nav.Link>
            <Nav.Link href="#link">Contact Me</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
