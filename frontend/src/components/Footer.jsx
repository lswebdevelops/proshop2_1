import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <p>Proshop &copy; {currentYear}
                
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
