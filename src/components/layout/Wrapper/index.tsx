import React, { FC } from 'react';
import { Container, Row } from 'reactstrap';
import { Footer } from '../Footer';
import { Header } from '../Header';

type Props = {
  hideHeader?: boolean;
  hideFooter?: boolean;
};

const Wrapper: FC<Props> = ({ children, hideFooter, hideHeader }) => {
  return (
    <Container className="h-100">
      <Row className="h-100">
        {!hideHeader && <Header />}
        <main className="row align-self-center">{children}</main>
        {!hideFooter && <Footer />}
      </Row>
    </Container>
  );
};

export { Wrapper };
