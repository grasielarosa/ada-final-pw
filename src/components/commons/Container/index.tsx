import React, { Children, FC } from 'react';
import { Container } from 'reactstrap';

type Props = {
  title: string;
};

const ContainerStyle: FC<Props> = ({ children, title }) => {
  return (
    <main className="row align-items-center h-100 ">
      <div className="col-sm-12 mx-auto w-50 ">
        <div className="h-100 justify-content-center">
          <Container className="bg-secondary p-5 rounded">
            <h3 className="text-center mb-4">{title}</h3>
            {children}
          </Container>
        </div>
      </div>
    </main>
  );
};

export { ContainerStyle };
