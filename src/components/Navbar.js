import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";

function NavBar() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary border-black"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container className="ms-5">
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
          <Nav className="ms-ato">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
