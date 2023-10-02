import { Container, Col } from "react-bootstrap";
import Image from "next/image";
import ProjectCarousel from ".//ProjectCarousel";

export default function Projects() {
  return (
    <Container fluid className="projects-section my-5 p-5 border-black">
      <div className="row projects-row">
        <Col className="projects-text " md={12}>
          <h4 className="display-8 w-100 py-3    content-section text-start">
            My Web Development Story
          </h4>
        </Col>
        <Col className="content-section p-2   projects-text ">
          <div className="row">
            <Col
              className="projects-text d-flex flex-column justify-content-center align-items-center"
              md={12}
            >
              <h4 className="d-flex align-self-center flex-column">
                Project 1
              </h4>
              <h5 className="d-flex align-self-center justify-self-center">
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud
              </h5>
            </Col>
            <Col className=" " md={12}>
              {/* <ProjectCarousel /> */}
            </Col>
            <Col className=" " md={12}>
              <div className="image-container ">
                <Image
                  id="hero-image"
                  src="/logoblue.png"
                  fill={true}
                  alt="logo"
                />
              </div>
            </Col>
            <Col
              className="projects-text d-flex flex-column d-flex flex-column align-items-center projects-text d-flex flex-column justify-content-center align-items-center"
              md={12}
            >
              <h4 className="d-flex align-self-center justify-self-center">
                Project 2
              </h4>
              <h5 className="d-flex align-self-center justify-self-center">
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud
              </h5>
            </Col>

            <Col
              className="projects-text d-flex flex-column projects-text d-flex flex-column justify-content-center align-items-center "
              md={12}
            >
              <h4 className="d-flex align-self-center justify-self-center">
                Project 3
              </h4>
              <h5 className="d-flex align-self-center justify-self-center">
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud
              </h5>
            </Col>
            <Col className=" " md={12}>
              <div className="image-container ">
                <Image
                  id="hero-image"
                  src="/logoblue.png"
                  fill={true}
                  alt="logo"
                />
              </div>
            </Col>
          </div>
        </Col>
      </div>
    </Container>
  );
}
