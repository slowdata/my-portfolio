import React from "react";

import JumboTron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Hero = ({ title, subTitle, text }) => (
  <JumboTron className="bg-transparent jumbotron-fluid p-0">
    <Container fluid={true}>
      <Row className="justify-content-center py-5">
        <Col md={8} sm={12}>
          {title && <h1 className="display-1 font-weight-bolder">{title}</h1>}
          {subTitle && (
            <h3 className="display-4 font-weight-light">{subTitle}</h3>
          )}
        </Col>
        <Col md={8} className="mt-3" sm={12}>
          {text && <h3 className="lead font-weight-light">{text}</h3>}
        </Col>
      </Row>
    </Container>
  </JumboTron>
);

export default Hero;
