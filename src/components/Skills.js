import { Container, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";  
import Image from "next/image"; 
export default function Skills() {
  return (
      <Container fluid className="skill-section px-5">
          <Row className="gy-5 d-flex justify-content-between">
          <Col md={6 } className="  ">
              <div className="content-section p-2">
          <h5>Full Stack Developer Tech Skills and Stacks </h5>
          <h5>
            HTML5 | CSS3 | JavaScript | React | Next | Content Management
            Systems | AWS EC2 S3 RDS | SQL | MongoDB | Excel | Tableau | MERN
            Stack | Front End | Back End
                  </h5>
              </div>
        </Col>
          <Col md={6} className=" ">
              <div className="content-section p-2 ">
          <h5>Team Skills</h5>
          <h5>
            Cross-cultural communication and team communication | Empathy
            | Emotional intelligence | Ability to effectively collaborate |
            Adaptability | Problem-solving | Critical thinking
                  </h5>
                  </div>
        </Col>
</Row>
        <Col className="content-section mx-2">
          <Image
            src="/headshot.png"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </Col>
    </Container>
  );
}