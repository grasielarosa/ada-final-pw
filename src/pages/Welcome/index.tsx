/* eslint-disable import/no-unresolved */
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardText } from 'reactstrap';
import { Footer } from '../../components';
import { withAuth } from '../../hoc';

const WelcomePage: FC = () => {
  return (
    <div className="container h-100">
      <div className="row align-items-center h-100">
        <div className="col-sm-12 mx-auto">
          <Card className="bg-transparent text-center text-secondary h-100 justify-content-center">
            <CardText>welcome to</CardText>
            <h1>CinemAda</h1>
            {/* <CardTitle tag="h1">CinemAda</CardTitle> */}
            <div>
              <Button outline className="btn-outline-primary">
                <Link
                  to="/login"
                  className="text-decoration-none text-secondary"
                >
                  Login
                </Link>
              </Button>
              <Button outline className="btn-outline-primary">
                <Link
                  to="/sign-up"
                  className="text-decoration-none text-secondary"
                >
                  Signup
                </Link>
              </Button>
            </div>
          </Card>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export const Welcome = withAuth(WelcomePage);
