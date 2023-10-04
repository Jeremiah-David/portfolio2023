import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "./Navbar";

export default function HeroSection() {
  return (
    <>
      <Container fluid className="hero-section p-4">
        <Row className="p-5  text-center justify-items-center row d-flex align-self-center hero-row">
          <Col className="text-start m-md-auto mt-3 mt-md-auto" md={7}>
            <h1>Willamette Valley Foundry</h1>

            <h4 className="">
              I{"'"}m Jeremiah. I build, deploy, and manage websites and web
              applications, teach, and mentor. If you have a small business site
              that needs created and launched, need a tech mentor, need a
              skilled Full Stack Engineer on a large project, or anything in
              between, I{"'"}d love to connect!
            </h4>
            <a href="#contact d-md-none">
              <button type="button" class="btn contact-button  d-md-none pt-3">
                Contact Me
              </button>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}
