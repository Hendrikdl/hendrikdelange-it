import React from "react";
import { Container, Row, Col, Card, Image, Badge } from "react-bootstrap";
import "../css/about.css";
import profilePic from "../images/profilepic.jpg";

const About = () => {
  return (
    <Container className="about-page py-5">
      {/* Header Section */}
      <Row className="align-items-center mb-5">
        <Col md={4} className="text-center mb-4 mb-md-0">
          <Image src={profilePic} roundedCircle fluid alt="Hendrik de Lange" />
        </Col>
        <Col md={8}>
          <h1 className="about-name mb-3">Hendrik de Lange</h1>
          <p className="about-role mb-2">
            Financial Advisor | Banking, Insurance & Investments Specialist |
            Information Technology
          </p>
          <p className="about-summary">
            I am a Financial Advisor with over 20 years of experience in
            banking, short-term insurance, investments, and financial advisory
            services. I am also transitioning into IT development, where I
            assist clients with a wide range of software and digital solutions.
            I help individuals and businesses plan for their long-term financial
            future, including retirement and estate planning. I hold a National
            Certificate in Banking and a Degree in Computer Science.
          </p>
        </Col>
      </Row>

      {/* Skills / Expertise Section */}
      <Row className="mb-5">
        <Col>
          <h3 className="section-title mb-3">Expertise & Services</h3>
          <div className="d-flex flex-wrap gap-2">
            <Badge bg="primary">Banking</Badge>
            <Badge bg="success">Short-Term Insurance</Badge>
            <Badge bg="warning" text="dark">
              Investments
            </Badge>
            <Badge bg="info" text="dark">
              Financial Advisory
            </Badge>
            <Badge bg="secondary">Retirement Planning</Badge>
            <Badge bg="dark">Estate Planning</Badge>
            <Badge bg="primary">Long-Term Insurance</Badge>
            <Badge bg="success">Full Stack Developer</Badge>
            <Badge bg="warning">Developer</Badge>
            <Badge bg="info">Mobile Development</Badge>
          </div>
        </Col>
      </Row>

      {/* Professional Summary Cards */}
      <Row className="g-4">
        <Col md={6}>
          <Card className="shadow-sm about-card h-100">
            <Card.Body>
              <Card.Title>Banking & Investments</Card.Title>
              <Card.Text>
                20 years of experience in banking, providing clients with secure
                and profitable investment solutions tailored to their goals.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm about-card h-100">
            <Card.Body>
              <Card.Title>Financial Advisory</Card.Title>
              <Card.Text>
                Personalized financial advice including retirement planning,
                estate planning, and insurance solutions to protect your future.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
