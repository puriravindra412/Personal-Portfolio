import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Weather from "../../Assets/Projects/Weather.png";
import TourRajasthan from "../../Assets/Projects/TourRajasthan.png";

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
              imgPath={Personal_Portfolio}
              isBlog={false}
              title="Personal Portfolio"
              description="My personal portfolio which features some of my github projects as well as my resume and technical skills."
              ghLink="https://github.com/puriravindra412/Personal-Portfolio"
              demoLink="https://puriravindra412.github.io/"
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
