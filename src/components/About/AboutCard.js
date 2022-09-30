import React from "react";
import Card from "react-bootstrap/Card";
import { BsCameraFill,BsCameraReelsFill} from "react-icons/bs";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ravindra Puri </span>
            from <span className="purple"> Jaipur, India.</span>
            <br />I am  pursuing B.TECH in Computing Science from <span className="purple"> Poornima Institue Of Engineering & Technology</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity ">
              <BsCameraFill /> Photography
            </li>
            <li className="about-activity">
              <BsCameraReelsFill /> cinematography
            </li>
            
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ravindra</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
