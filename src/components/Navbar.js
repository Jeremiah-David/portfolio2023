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
          <Image
            id="hero-image"
            src="/logoblue.png"
            height={50}
            width={50}
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-ato">
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#projects">What I Do</Nav.Link>
            <Nav.Link href="#aboutme">About Me</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="https://github.com/Jeremiah-David" target="_blank">
              <i class="bi bi-github"></i>
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/jeremiahdavid83/"
              target="_blank"
            >
              <i class="bi bi-linkedin"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
