/* eslint-disable import/no-unresolved */
import React, { FC } from 'react';
import { Button, Card, CardText, CardTitle } from 'reactstrap';

const Welcome: FC = () => {
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
                Login
              </Button>
              <Button outline className="btn-outline-primary">
                SignUP
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export { Welcome };
