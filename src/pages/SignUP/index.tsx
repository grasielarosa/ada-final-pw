import React, { FC } from 'react';
import { SignUp as SignUpForm, Container, Wrapper } from '../../components';

const SignUp: FC = () => {
  return (
    <Wrapper hideHeader>
      <Container title="SignUp Cinemada">
        <SignUpForm />
      </Container>
    </Wrapper>
  );
};

export { SignUp };
