import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

export default function AboutMe() {
  return (
    <Container fluid className="about-me-section my-5  yellow-left ms-2">
      <Row className="about-me-row  py-5">
        <Col md={6}>
          <h3>Meet Jeremiah</h3>
          <div className="m-auto">
            <h4 className="about-me-text d-flex justify-self-center flex-column ">
              I am a web developer, freelancer web developer, tech educator,
              gamer, dad and studying for my AWS Solutions Architect
              Certificate.
            </h4>
          </div>
        </Col>
        <Col className="about-me-image text-center" md={6}>
          <div className="image-container-about-me">
            <Image src="/me.png" height={300} width={300} alt="me" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
