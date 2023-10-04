import { Container, Col } from "react-bootstrap";
import Image from "next/image";
import ProjectCarousel from ".//ProjectCarousel";
import ProjectCard from "./ProjectsCard";

export default function Projects() {
  return (
    <>
      <div className="pt-5" id="projects"></div>
      <div className="pt-5" id="projects-padding"></div>
      <div id="projects-section-y-wrapper">
        <Container
          fluid
          className="projects-section my-2 py-2 border-black-project"
        >
          <h2 className="   text-start">What I Do</h2>
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
          <ProjectCard
            header="Team Lead, Podium Education"
            text="                Web Development Educator, Podium Education As a passionate Web
                Development Educator, I take pride in my role as a guide for
                aspiring developers, ensuring they embark on a transformative
                journey into the world of web development. With a commitment to
                delivering top-notch education, I've had the privilege of
                sharing my expertise with over 1500 students from more than 50
                university partners. Innovative Learning Tools: I developed a
                cutting-edge JavaScript project testing library that
                revolutionized the grading process, reducing evaluation time
                from approximately 5 minutes per project to less than 30
                seconds. In addition, I created an HTML and CSS project testing
                library using JavaScript, streamlining grading to under 20
                seconds per project. Distinguished Impact: My dedication to
                excellence was recognized with the prestigious Podi Award for
                making a significant impact on over 500 Web Development students
                during the Summer of 2022. Exceptional Communication: With
                exceptional communication and leadership abilities, I achieved
                an outstanding student rating score of 9.81/10, ensuring that my
                students not only acquired technical skills but also enjoyed an
                engaging and enriching learning experience. If you're searching
                for an educator who can empower students with practical skills
                and foster a love for web development, I'm here to collaborate
                and continue making a positive impact. Please feel free to
                connect to explore opportunities or discover more about my
                educational services. Let's inspire the next generation of web
                developers together."
          />
          <ProjectCard
            header="Full-Stack Developer Mentor, Actualize Coding Bootcamp"
            text="As a dedicated Full-Stack Junior Developer Mentor, I have the privilege of guiding and nurturing the next 
                  generation of tech talent who have emerged from intensive coding boot camps. My primary focus is on supporting 
                  aspiring developers in their journey towards becoming proficient and confident professionals in the field. 
                  I'm passionate about equipping them not only with practical coding skills but also with a strong foundation in 
                  algorithms and computer science fundamentals. By delving into these essential aspects, I help mentees develop a 
                  holistic understanding of software development."
          />
        </Container>
      </div>
    </>
  );
}
