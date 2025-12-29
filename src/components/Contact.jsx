import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { EnvelopeFill, TelephoneFill, PersonFill } from "react-bootstrap-icons";
import "../css/contact.css";

const Contact = () => {
  return (
    <Container className="contact-page py-5">
      <Row className="justify-content-center text-center mb-4">
        <Col md={8}>
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">
            I’d love to hear from you. Feel free to reach out using the details
            below.
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card className="contact-card shadow-sm">
            <Card.Body>
              <div className="contact-item">
                <PersonFill className="contact-icon" />
                <div>
                  <h5>Name</h5>
                  <p>Hendrik de Lange</p>
                </div>
              </div>

              <div className="contact-item">
                <TelephoneFill className="contact-icon" />
                <div>
                  <h5>Mobile</h5>
                  <p>
                    <a href="tel:0767217324">076 721 7324</a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <EnvelopeFill className="contact-icon" />
                <div>
                  <h5>Email</h5>
                  <p>
                    <a href="mailto:hpjdelange@gmail.com">
                      hpjdelange@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
