import { Container, Col } from "react-bootstrap";
import Image from "next/image";
import ProjectCarousel from ".//ProjectCarousel";
import ProjectCard from "./ProjectsCard";

export default function Projects() {
  return (
    <div id="projects-section-y-wrapper">
      <Container fluid className="projects-section my-2 py-2 border-black">
        <div className="row projects-row">
          <Col className="projects-text " md={12}></Col>
          <Col className="content-section p-2   projects-text ">
            <div className="row">
              <Col className="projects-text" md={12}>
                <h2 className="  content-section text-start">What I Do</h2>
                <ProjectCard
                  header="Web Master, Pioneer Preperatory School"
                  text="As a seasoned Webmaster, I take pride in my role as the custodian of the digital realm, ensuring that websites 
                  run smoothly, and efficiently, and deliver an exceptional user experience. With a strong background in web development,
                   I have constructed websites from the ground up, utilizing a versatile tech stack that combines Next.js and React for 
                   the front end, Strapi CMS for content management, and a MySQL database. My infrastructure expertise extends to 
                   hosting the backend on Amazon Web Services (AWS) using EC2 instances, S3 buckets, and RDS databases, while the 
                   front end resides on Vercel for seamless deployment and scaling.
                  My role as a Webmaster combines technical expertise with a keen eye for design and functionality. I am committed to
                   delivering top-tier web experiences and ensuring that websites are not only visually captivating but also perform
                    optimally. If you're seeking a webmaster who can elevate your digital presence and provide a seamless online
                     experience for your audience, I'm here to help. Feel free to reach out to discuss collaboration opportunities
                      or to learn more about my webmaster services. Let's create and manage exceptional web experiences together.
"
                />
              </Col>

              <Col
                className="projects-text d-flex flex-column d-flex flex-column align-items-center projects-text d-flex flex-column justify-content-center align-items-center"
                md={12}
              >
                <ProjectCard
                  header="Team Lead, Podium Education"
                  text="Successfully taught and delivered the undergraduate web development experience to 1500+ students from over 50 university partners.
•Developed a JavaScript project testing library, reducing grading time from ~5 minutes per project to > 30 seconds.
•Created an HTML and CSS project testing library using JavaScript, reducing grading time from ~2 minutes per project to > 20 seconds.
•Awarded the “Podi Award” for proof of distinguished impact with 500+ Web Development students during Summer 2022.
•Achieved a student rating score of 9.81/10 based on exceptional communication and leadership abilities."
                />
              </Col>

              <Col
                className="projects-text d-flex flex-column d-flex flex-column align-items-center projects-text d-flex flex-column justify-content-center align-items-center"
                md={12}
              >
                <ProjectCard
                  header="Full-Stack Developer Mentor, Actualize Coding Bootcamp"
                  text="As a dedicated Full-Stack Junior Developer Mentor, I have the privilege of guiding and nurturing the next 
                  generation of tech talent who have emerged from intensive coding boot camps. My primary focus is on supporting 
                  aspiring developers in their journey towards becoming proficient and confident professionals in the field. 
                  I'm passionate about equipping them not only with practical coding skills but also with a strong foundation in 
                  algorithms and computer science fundamentals. By delving into these essential aspects, I help mentees develop a 
                  holistic understanding of software development."
                />
              </Col>

              <Col
                className="projects-text d-flex flex-column projects-text d-flex flex-column justify-content-center align-items-center "
                md={12}
              >
                <h4 className="d-flex align-self-center justify-self-center">
                  Project 3
                </h4>
                <h5 className="d-flex align-self-center justify-self-center">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud
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
    </div>
  );
}
