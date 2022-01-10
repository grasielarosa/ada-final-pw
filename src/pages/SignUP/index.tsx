import React, { FC } from 'react';
import { SignUp as SignUpForm, Container, Wrapper } from '../../components';
import { withAuth } from '../../hoc';

const SignUpPage: FC = () => {
  return (
    <Wrapper hideHeader>
      <Container title="SignUp Cinemada">
        <SignUpForm />
      </Container>
    </Wrapper>
  );
};

export const SignUp = withAuth(SignUpPage);
