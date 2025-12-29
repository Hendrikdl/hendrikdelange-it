import React from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import { Github, BoxArrowUpRight } from "react-bootstrap-icons";
import "../css/portfolio.css";
import budget from "../images/budget.png";
import creativeFurnitureImage from "../images/creative.png";
import tictactoeimage from "../images/ticktactoe.png";
import hendrikdelangeImage from "../images/hendrikdelange.png";
import weatherImage from "../images/weather.png";
import portfolioImage from "../images/portfolio.png";

// Example project data blueprint
const projects = [
  {
    title: "My Budget App",
    image: budget,
    description:
      "A Full Stack personal finance management tool to track income, expenses, and budgets.",
    technologies: [
      "React",
      "Redux",
      "Vite",
      "Bootstrap",
      "Express",
      "Node.js",
      "MongoDB",
    ],
    languages: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/hendrikdl/mybudget",
    live: "https://my-personal-budget.onrender.com",
  },
  {
    title: "Client - Creative Furniture",
    image: creativeFurnitureImage,
    description:
      "Clients site that manufactures furniture for businesses and personal use.",
    technologies: ["React", "EmailJS", "Bootstrap", "Router Dom"],
    languages: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Hendrikdl/CreativeFurniture",
    live: "https://tmcreativefurniture.onrender.com",
  },
  {
    title: "Tic Tac Toe Game",
    image: tictactoeimage,
    description: "a Copy project that I followed on YouTube for my daughter.",
    technologies: ["React", "Vite", "Tailwind CSS", "React Dom"],
    languages: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Hendrikdl/tictactoe",
    live: "https://tic-tac-toe-bianca.onrender.com",
  },
  {
    title: "Financial Advisory Work Website",
    image: hendrikdelangeImage,
    description:
      "My Work website where I also assist clients as a Financial Advisor.",
    technologies: ["React", "Bootstrap", "React Router Dom"],
    languages: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Hendrikdl/hendrikdelange",
    live: "https://hendrikdelange.onrender.com",
  },
  {
    title: "Weather App",
    image: weatherImage,
    description:
      "Weather App project that I have tried from a site that teaches Full Stack Web Development.",
    technologies: ["React", "Vite", "Tailwind CSS"],
    languages: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Hendrikdl/WeatherApp",
    live: "https://weatherapp-slbw.onrender.com/",
  },
  {
    title: "My Portfolio Site",
    image: portfolioImage,
    description:
      "My personal website about my Portfolios and development that showcase my projects for clients and personal developments.",
    technologies: ["React", "HTML", "css"],
    languages: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Hendrikdl/hendrikdelange-it",
    live: "",
  },
  // Add more projects here
];

const Portfolio = () => {
  return (
    <Container className="portfolio-page py-5">
      <Row className="text-center mb-5">
        <Col>
          <h1 className="portfolio-title">My Portfolio</h1>
          <p className="portfolio-subtitle">
            A collection of projects I’ve worked on, showcasing my skills and
            experience.
          </p>
        </Col>
      </Row>

      <Row className="g-4">
        {projects.map((project, idx) => (
          <Col key={idx} md={6} lg={4}>
            <Card className="portfolio-card h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={project.image}
                alt={project.title}
                className="portfolio-image"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>

                <div className="mb-2">
                  <strong>Technologies: </strong>
                  {project.technologies.map((tech, i) => (
                    <Badge bg="primary" key={i} className="me-1 mb-1">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="mb-3">
                  <strong>Languages: </strong>
                  {project.languages.map((lang, i) => (
                    <Badge bg="success" key={i} className="me-1 mb-1">
                      {lang}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto d-flex gap-2">
                  {project.github && (
                    <Button
                      variant="dark"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="me-1" /> GitHub
                    </Button>
                  )}
                  {project.live && (
                    <Button
                      variant="primary"
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BoxArrowUpRight className="me-1" /> Live Site
                    </Button>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Portfolio;
