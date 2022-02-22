/* eslint-disable import/no-unresolved */
import React, { FC } from 'react';
import GithubCorner from 'react-github-corner';
import { Link } from 'react-router-dom';
import { Button, Card, CardText } from 'reactstrap';
import { Footer } from '../../components';
import { withAuth } from '../../hoc';

const WelcomePage: FC = () => {
  return (
    <div className="container h-100">
      <GithubCorner
        href="https://github.com/grasielarosa/ada-final-pw"
        octoColor="#1b1a27"
        bannerColor="#fffacd"
      />
      <div className="row align-items-center h-100">
        <div className="col-sm-12 mx-auto">
          <Card className="bg-transparent text-center text-secondary h-100 justify-content-center">
            <CardText className="mt-5 mb-0">welcome to</CardText>
            <h1 className="mb-5 mt-0">CinemAda</h1>
            <div className="d-block mx-auto w-50 d-flex justify-content-evenly mt-5 px-5 py-3">
              <Button outline className="btn-outline-primary w-25">
                <Link
                  to="/login"
                  className="text-decoration-none text-secondary"
                >
                  Login
                </Link>
              </Button>
              <Button outline className="btn-outline-primary w-25">
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
