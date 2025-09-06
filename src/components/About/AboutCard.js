import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Walters Eric </span>
            from <span className="purple"> the United States</span>
            <br />
            I’m a passionate and results-driven Full-Stack Developer with over 7 years of experience building scalable, performant, and modern web applications. 
            I specialize in Node.js on the backend and deliver seamless, responsive frontends using frameworks like React, Next.js, or Vue.js.
            <br />
            I love turning complex problems into simple, elegant solutions—and I’m always focused on writing clean, maintainable code with long-term scalability in mind.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
