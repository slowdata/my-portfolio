import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Content = ({ children }) => (
  <Container className="mb-5" fluid={true}>
    <Row className="justify-content-center">
      <Col md={8}>{children}</Col>
    </Row>
  </Container>
);

export default Content;
