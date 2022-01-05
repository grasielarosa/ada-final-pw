import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

const Footer = () => {
  return (
    <footer className="align-self-end">
      <Row>
        <Col className="">
          <p className="text-secondary text-center fw-light">
            developed by{' '}
            <Link
              className="text-secondary text-decoration-none"
              to="https://www.linkedin.com/in/grasielarosa/"
            >
              Grasiela Rosa
            </Link>
          </p>
        </Col>
      </Row>
    </footer>
  );
};

export { Footer };
