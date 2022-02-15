import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

const Footer: FC = () => {
  return (
    <footer className="align-self-end">
      <Row>
        <Col className="">
          <p className="text-secondary text-center fw-light">
            developed by{' '}
            <a
              className="text-secondary text-decoration-none"
              href="https://www.linkedin.com/in/grasielarosa/"
              target="_blank"
              rel="noreferrer"
            >
              Grasiela Rosa
            </a>
          </p>
        </Col>
      </Row>
    </footer>
  );
};

export { Footer };
