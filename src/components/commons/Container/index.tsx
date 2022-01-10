import React, { FC } from 'react';
import { Container } from 'reactstrap';

type Props = {
  title?: string;
  classname?: string;
};

const ContainerStyle: FC<Props> = ({ children, title }) => {
  return (
    <div className="col-sm-12 mx-auto w-50 align-self-center">
      <div className="h-100 justify-content-center">
        <Container className="bg-secondary p-5 rounded">
          <h3 className="text-center mb-4">{title}</h3>
          {children}
        </Container>
      </div>
    </div>
  );
};

export { ContainerStyle };
