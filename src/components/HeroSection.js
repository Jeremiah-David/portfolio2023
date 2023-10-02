import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "./Navbar";
// import headshot from ";

import Image from "next/image";

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
              applications, teach and mentor. Let's make somthing great.
            </h4>
            <a href="#contact">
              <button type="button" class="btn contact-button">
                Contact Me
              </button>
            </a>
          </Col>
          {/*
        <Col className="text-center" md={6}>
          <div className="content-section">
            <h4 className="display-6 p-2">Services</h4>
            <h5 className="p-2">
              Website Design and Development: Modern and responsive websites. I
              specialize in HTML5, CSS3, JavaScript, React, and Next.js.{" "}
            </h5>
            <h5 className="p-2">
              Content Management Systems (CMS): Custom Content Management
              Systems using tools like Strapi. CMS solutions make it easy for
              clients to manage and update their website content.
            </h5>
            <h5 className="p-2">
              Cloud Infrastructure and Hosting: Deploy websites on Amazon Web
              Services (AWS), including using EC2 for hosting, S3 buckets for
              file storage, and RDS for data management. Focus on security and
              data integrity.
            </h5>
            <h5 className="p-2">
              Database Management: Expertise in working with databases,
              including SQL and MongoDB.{" "}
            </h5>
          </div>
        </Col> */}
        </Row>
      </Container>
    </>
  );
}
