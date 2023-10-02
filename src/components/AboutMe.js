import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

export default function AboutMe() {
    return (
        <Container fluid className="about-me-section my-5  yellow-left ">
            <Row className="about-me-row  py-5">
                <Col className="about-me-text" md={6}>
                    <h5>
                        Meet Jeremiah
                    </h5>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do     
                </Col>
                <Col className="about-me-image text-center" md={6}>
                    <div className="image-container-about-me">
                    <Image 
                        src="/me.png"
                           fill={true}
                        alt="me"
                        />
                        </div>
                </Col>
            </Row>
        </Container>
    )

 }
