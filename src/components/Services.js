import { Container, Col, Row } from "react-bootstrap";
import ServicesCard from "./ServicesCard";
export default function Services() {
  return (
    <Container
      fluid
      className="services-section  pb-5 mx-md-2 border-yellow yellow-left"
    >
      <div className=" row">
        <Col className=" services-text" md={12}>
          <h2 className="text-start content-section">Services</h2>
        </Col>
        <Col
          className=" content-section  services-text align-self-start"
          md={6}
        >
          <h4 className="">Cloud Infrastructure and Hosting</h4>
          <p className="">
            Deploy websites on Amazon Web Services (AWS), including using EC2
            for hosting, S3 buckets for file storage, and RDS for data
            management. Focus on security and data integrity.
          </p>
        </Col>
        <Col className="content-section p-2   services-text " md={6}>
          <h4 className="">Website Design and Development</h4>
          <p className="">
            Modern and responsive websites. I specialize in HTML5, CSS3,
            JavaScript, React, and Next.js.{" "}
          </p>
        </Col>
        <Col className="content-section p-2   services-text" md={6}>
          <h4 className="">Content Management Systems (CMS)</h4>
          <p className="">
            Custom Content Management Systems using tools like Strapi. CMS
            solutions make it easy for clients to manage and update their
            website content.
          </p>
        </Col>

        <Col className="content-section" md={6}>
          <h4 className=""> Database Management</h4>
          <p className="">
            Database Management: Expertise in working with databases, including
            SQL and MongoDB.{" "}
          </p>
        </Col>
      </div>
    </Container>
  );
}
