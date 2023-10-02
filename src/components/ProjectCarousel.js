import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <div className="image-container text-center d-flex align-self-center  justify-self-end ms-auto hero-image-container">
          <Image
            id="hero-image"
            src="/logoblue.png"
            fill={true}
            // objectFit="cover"
            alt="logo"
          />
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="image-container text-center d-flex align-self-center  justify-self-end ms-auto hero-image-container">
          <Image
            id="hero-image"
            src="/logoblue.png"
            fill={true}
            // objectFit="cover"
            alt="logo"
            text="text"
          />
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="image-container text-center d-flex align-self-center  justify-self-end ms-auto hero-image-container">
          <Image
            id="hero-image"
            src="/logoblue.png"
            fill={true}
            // objectFit="cover"
            alt="logo"
          />
        </div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
