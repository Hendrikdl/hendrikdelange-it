import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Github,
  BoxArrowUpRight,
  EnvelopeFill,
  TelephoneFill,
  PersonFill,
} from "react-bootstrap-icons";
import budgetImage from "../images/budget.png"; // example image
import "../css/home.css";
import profilePhoto from "../images/profilepic.jpg";

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section text-center d-flex flex-column justify-content-center align-items-center">
        <h1 className="hero-title">Hendrik de Lange</h1>
        <p className="hero-subtitle">Full Stack Developer</p>
        <Button as={Link} to="/about" variant="primary" className="mt-3">
          Learn More About Me
        </Button>
      </section>

      {/* About Section */}
      <section id="about" className="about-section py-5">
        <Container>
          <Row className="align-items-center mb-5">
            <Col md={4} className="text-center mb-4 mb-md-0">
              <img
                src={profilePhoto}
                alt="Hendrik de Lange"
                className="rounded-circle about-img"
              />
            </Col>
            <Col md={8}>
              <h2>About Me</h2>
              <p>
                With 20 years of experience in banking, insurance, and
                investments, I provide expert financial advice including
                retirement planning, estate planning, and insurance solutions. I
                hold a National Certificate in Banking and a Degree in Computer
                Science.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Portfolio</h2>
          <Row className="g-4">
            <Col md={6} lg={4}>
              <Card className="portfolio-card h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={budgetImage}
                  className="portfolio-image"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>My Budget App</Card.Title>
                  <Card.Text>
                    A personal finance management tool to track income,
                    expenses, and budgets.
                  </Card.Text>
                  <div className="mb-2">
                    <Badge bg="primary" className="me-1 mb-1">
                      React
                    </Badge>
                    <Badge bg="success" className="me-1 mb-1">
                      Bootstrap
                    </Badge>
                  </div>
                  <div className="mt-auto d-flex gap-2">
                    <Button
                      variant="dark"
                      href="https://github.com/yourusername/my-budget"
                      target="_blank"
                    >
                      <Github className="me-1" /> GitHub
                    </Button>
                    <Button
                      variant="primary"
                      href="https://my-personal-budget.onrender.com"
                      target="_blank"
                    >
                      <BoxArrowUpRight className="me-1" /> Live Site
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            {/* Add more portfolio items here */}
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section py-5">
        <Container className="text-center">
          <h2>Contact Me</h2>
          <Row className="justify-content-center mt-4">
            <Col md={6}>
              <Card className="contact-card shadow-sm">
                <Card.Body>
                  <div className="contact-item mb-3">
                    <PersonFill className="contact-icon" />{" "}
                    <span>Hendrik de Lange</span>
                  </div>
                  <div className="contact-item mb-3">
                    <TelephoneFill className="contact-icon" />{" "}
                    <a href="tel:0767217324">076 721 7324</a>
                  </div>
                  <div className="contact-item">
                    <EnvelopeFill className="contact-icon" />{" "}
                    <a href="mailto:hpjdelange@gmail.com">
                      hpjdelange@gmail.com
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
