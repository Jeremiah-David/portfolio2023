import { Container, Col, Row } from "react-bootstrap";

export default function Contact() {
  return (
    <>
      <Container
        fluid
        className="contact-section p-2 border-black "
        id="contact"
      >
        <Row>
          <Col>
            <div className="contact-text p-2">
              <h2 className="  content-section text-start">Contact Me</h2>
              <p>Feel free to get in touch; I{"'"}d love to connect!</p>
              <p>Email: jeremiahdavidftl@gmail.com</p>

              <div className="icon-box">
                <i class="bi bi-github fs-1 px-3"></i>
                <i class="bi bi-linkedin fs-1 px-3"></i>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
