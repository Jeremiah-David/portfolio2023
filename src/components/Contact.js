import { Container } from "react-bootstrap";

export default function Contact() {
  return (
    <>
      <Container
        fluid
        className="contact-section  border-yellow  p-3  border-black"
        id="contact"
      >
        <h3 className="display-5  text-start content-section">Contact Me</h3>
        <p className="fs-2">jeremiahdavidftl@gmail.com</p>
        <p className="fs-2">541-606-3193</p>
      </Container>
    </>
  );
}
