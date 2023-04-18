import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
  return (
    <Container fluid className="bg-dark text-white">
      <Row>
        <Col className="text-center py-3">
        <p>Copyright © {new Date().getFullYear()}
        <a href="/"> My Website</a> All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
