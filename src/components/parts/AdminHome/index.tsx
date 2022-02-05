import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Button, Card, CardText, Col, Row } from 'reactstrap';
import { withAuth } from '../../../hoc';
import { useUsers } from '../../../hooks/useUsers';

const AdminHome = () => {
  const { currentUser } = useUsers();
  return (
    <div className="justify-content-start">
      <div className="my-5">
        <h3 className="text-secondary">Hi, {currentUser?.name}</h3>
        <p className="text-secondary">What do you want today?</p>
      </div>
      <Row className="g-3 my-3">
        <Col sm="12" md="6" lg="3" className="h-100">
          <Card className="bg-secondary text-primary" body>
            <CardText>Manage your users.</CardText>
            <Link to="/users" className="d-grid">
              <Button className="bg-primary text-secondary">
                <BsArrowRight />
              </Button>
            </Link>
          </Card>
        </Col>
        <Col sm="12" md="6" lg="3" className="h-100">
          <Card body className="bg-secondary text-primary">
            <CardText>Manage your database.</CardText>
            <Link to="/admin" className="d-grid">
              <Button className="bg-primary text-secondary">
                <BsArrowRight />
              </Button>
            </Link>
          </Card>
        </Col>
        <Col sm="12" md="6" lg="3" className="h-100">
          <Card body className="bg-secondary text-primary">
            <CardText>See your movies.</CardText>
            <Link to="/movies" className="d-grid">
              <Button className="bg-primary text-secondary">
                <BsArrowRight />
              </Button>
            </Link>
          </Card>
        </Col>
        <Col sm="12" md="6" lg="3" className="h-100">
          <Card body className="bg-secondary text-primary">
            <CardText>See your series.</CardText>
            <Link to="/series" className="d-grid">
              <Button className="bg-primary text-secondary">
                <BsArrowRight />
              </Button>
            </Link>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export const Admin = withAuth(AdminHome);
