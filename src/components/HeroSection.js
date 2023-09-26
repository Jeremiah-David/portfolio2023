import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import headshot from ";

import Image from "next/image";

export default function HeroSection() {
  return (
    <Container fluid className="hero-section p-5">
      <Row className="gy-5 d-flex justify-content-between">
        <Col className=" justify-content-between">
          <h1 className="display-1 content-section ">Jeremiah David</h1>
          <h6 className="content-section p-2 align-self-end flex-grow-1 mt-auto">
            Building Digital Worlds, One Code at a Time: Freelance Web
            Developer, Tech Educator, Proud Dad, and AWS Solutions Architect in
            Training
          </h6>
        </Col>
        <Col className="content-section mx-2 ">
          <h5>Full Stack Developer Tech Skills and Stacks </h5>
          <h5>
            HTML5 | CSS3 | JavaScript | React | Next | Content Management
            Systems | AWS EC2 S3 RDS | SQL | MongoDB | Excel | Tableau | MERN
            Stack | Front End | Back End
          </h5>
          <h5>Team Skills</h5>
          <h5>
            Skills Cross-cultural communication and team communication | Empathy
            | Emotional intelligence | Ability to effectively collaborate |
            Adaptability | Problem-solving | Critical thinking
          </h5>
        </Col>

        <Col className="content-section mx-2">
          <Image
            src="/headshot.png"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </Col>
      </Row>
    </Container>
  );
}
