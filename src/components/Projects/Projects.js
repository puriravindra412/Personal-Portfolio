import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Weather from "../../Assets/Projects/Weather.png";
import TourRajasthan from "../../Assets/Projects/TourRajasthan.png";
import Communex from "../../Assets/Projects/communex.png";

import airbnb from "../../Assets/Projects/airbnb.png";
import Personal_Portfolio from "../../Assets/Projects/Portfolio.png";
import ChatX from "../../Assets/Projects/ChatX.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Communex}
              isBlog={false}
              title="Communex"
              description="Communex is an innovative and community-driven platform designed to unite individuals from diverse backgrounds. By fostering connections, collaboration, and knowledge-sharing, Communex empowers users to connect, share, and innovate together. Through its dynamic multi-user blogging and social media environment, users can engage in meaningful interactions, learn from each other, and collaborate on projects. Whether you're a developer, a tech enthusiast, or someone passionate about connecting with like-minded individuals, Communex provides a vibrant hub for community-building and personal growth."
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Personal_Portfolio}
              isBlog={false}
              title="Personal Portfolio"
              description="Welcome to my personal portfolio, a digital space where my passion for web development comes to life. Through captivating design and meticulous craftsmanship, I showcase a collection of my projects, skills, and expertise. With a focus on creating captivating user experiences, I invite you to explore my journey through the realm of web development. From front-end magic to back-end innovation, this portfolio reflects my dedication to crafting immersive digital solutions that leave a lasting impact. Join me on this digital journey and witness the fusion of creativity and technology that defines my work."
              ghLink="https://github.com/puriravindra412/Personal-Portfolio"
              demoLink="https://personal-portfolio-ravindra.netlify.app/resume"
            />
          </Col>
          <Col md={4} className="project-card">
          <ProjectCard
            imgPath={airbnb}
            isBlog={false}
            title="Airbnb clone"
            description="Experience the essence of web development with my Airbnb Recommendation Page Clone. Using React.js, I've crafted a responsive and engaging front-end replica of Airbnb's interface. Explore modern design, seamless navigation, and interactive elements that highlight my skills in creating captivating user experiences."
            ghLink=""
            demoLink=""
          />
        </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={false}
              title="Weather App"
              description="online live weather update of any city. Its a single page php application which uses curl api for weather Update . Developed using html , css as frontend and php as backend api integration. "
              ghLink="https://github.com/puriravindra412/Wheater-app"
              demoLink="https://ravindrapuri.000webhostapp.com/weather-app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ChatX}
              isBlog={false}
              title="ChatX"
              description="Real time Chat application where we can chat with all the registered user and can also see who is online."
              ghLink="https://github.com/puriravindra412/ChatX"
              demoLink="https://chatx412.herokuapp.com/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TourRajasthan}
              isBlog={false}
              title="Tour Rajasthan"
              description="Tour Rajasthan is a Travel Blogging Website for Rajasthan that aims to provide the Tourists to Explore Rajasthan's Beauty"
              ghLink="https://github.com/puriravindra412/Tour-Rajasthan"
              demoLink="https://tourrajasthan.000webhostapp.com/" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
