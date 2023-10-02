import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "./Navbar";

export default function HeroSection() {
  return (
    <>
      <Container fluid className="hero-section p-4">
        <Row className="p-5  text-center justify-items-center row d-flex align-self-center hero-row">
          {/* <Col md={6}>
          <div className="content-section ">
            {" "}
            <h3 className="display-5 p-1">Tech Skills and Stacks </h3>
            <h4 className="p-2">
              HTML5 | CSS3 | JavaScript | React | Next | Content Management
              Systems | AWS EC2 S3 RDS | SQL | MongoDB | Excel | Tableau | MERN
              Stack | Front End | Back End
            </h4>
            <h3 className="display-5 p-1">Team Skills</h3>
            <h4 className="p-2">
              Skills Cross-cultural communication and team communication |
              Empathy | Emotional intelligence | Ability to effectively
              collaborate | Adaptability | Problem-solving | Critical thinking
            </h4>
          </div>
        </Col> */}

          <Col className="text-start m-auto" md={7}>
            <h3 className="display-6  ">Welcome Friend</h3>
            <h4 className="display-6  ">
              I'm Jeremiah. I build, deploy, and manage websites and web
              applications, teach, and mentor. Let's make somthing great.
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
