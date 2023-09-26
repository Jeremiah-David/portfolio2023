import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import headshot from ";

import Image from "next/image";

export default function HeroSection() {
  return (
    <Container fluid className="hero-section px-5 pt-5 text-center">

      <Row className="gy-5 d-flex justify-content-between flex-column">
      <div className="overlay">
        <Col className=" justify-content-between">
          <h1 className="display-1 content-section ">Jeremiah David</h1>
        </Col>
        
            <Col className=" justify-content-between">
          <h6 className="content-section p-2 align-self-end flex-grow-1 mt-auto">
            Building Digital Worlds, One Code at a Time: Freelance Web
            Developer, Tech Educator, Proud Dad, and AWS Solutions Architect in
            Training
          </h6>
        </Col>
       </div>
      </Row>
    </Container>
  );
}
