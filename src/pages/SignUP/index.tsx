import React, { FC } from 'react';
import { SignUp as SignUpForm, Container } from '../../components';

const SignUp: FC = () => {
  return (
    <Container title="SignUp Cinemada">
      <SignUpForm />
    </Container>
  );
};

export { SignUp };
