import React, { FC } from 'react';
import { Button } from 'reactstrap';

const Welcome: FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>Welcome to</h3>
          <h1>CinemAda</h1>

          <Button>Login</Button>
          <Button>SignUP</Button>
        </div>
      </div>
    </div>
  );
};

export { Welcome };
