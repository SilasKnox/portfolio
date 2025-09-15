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
            <br /><br />
            My main stack is <span className="purple">JavaScript/TypeScript</span> with <span className="purple">React, Next.js, Node.js,</span> and <span className="purple">PostgreSQL,</span> with <span className="purple">Python/FastAPI</span> when needed. I work with <span className="purple">GraphQL/REST APIs, AWS,</span> modern UI frameworks, and integrate AI features using <span className="purple">LangChain</span> and <span className="purple">NLP</span>. For mobile, I use <span className="purple">React Native</span>, and I’m exploring <span className="purple">TensorFlow, PyTorch, Docker, Kubernetes, Terraform,</span> and <span className="purple">Solidity</span>.
            <br /><br />
            I led <span className="purple">TaskFlow</span>, a project management platform, designing the backend architecture for real-time collaboration and scaling to thousands of users. 
            <br />
            I built <span className="purple">ShopEase</span>, a custom e-commerce platform, optimizing payments, inventory, and performance under heavy load. 
            <br />
            I also developed <span className="purple">FinTrack</span>FinTrack, a financial dashboard, and EduPortal, an online learning platform, focusing on clean architecture, secure APIs, and maintainable code. 
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
