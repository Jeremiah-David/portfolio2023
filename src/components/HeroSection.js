import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "./Navbar";
// import headshot from ";

import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <NavBar />
      <Container fluid className="hero-section p-4">
        <Row className="">


          <Col
            className=" "
            md={7}
          >
            <h4 className="  ">
              Welcome Friend
            </h4>
            <h4 className="">
              I'm Jeremiah. I build websites and web applications, teach and
              mentor, and offer a variety of web based solutions.
            </h4>
            <a href="#contact">
              <button type="button" class="btn contact-button">
                Contact Me
              </button>
            </a>
          </Col>
       
        </Row>
      </Container>
    </>
  );
}
