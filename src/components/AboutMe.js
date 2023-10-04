import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

export default function AboutMe() {
  return (
    <Container fluid className="about-me-section my-5  yellow-left ms-md-3">
      <Row className="about-me-row  py-5">
        <Col md={7}>
          <div className="m-auto d-flex align-items-center flex-column justify-content-center h-100">
            <h3>Meet Jeremiah</h3>
            <h4 className="about-me-text d-flex justify-self-center align-items-center p-5">
              I am a Full Stack Engineer, Freelancer Web Developer, Tech
              Educator, gamer, proud dad and currently working towards my AWS
              Solutions Architect Certificate.
            </h4>
          </div>
        </Col>
        <Col className="about-me-image text-center" md={5}>
          <div className="image-container-about-me">
            <Image src="/me.png" height={300} width={300} alt="me" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
