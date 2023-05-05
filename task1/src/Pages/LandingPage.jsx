import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";

const LandingPage = () => {
  return (
    <div className="backgroundImage text-center" >
      <div>&nbsp;</div>
      <Container className="mt-5">
        <h1>Welcome to Landing Page</h1>
        <Row className="justify-content-center gap-3">
          <Card style={{ width: "18rem" }}>
            <Card.Body>This is some text within a card body.</Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Body>This is some text within a card body.</Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Body>This is some text within a card body.</Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
