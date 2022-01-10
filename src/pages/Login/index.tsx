import React, { FC } from 'react';

import { Container, Login as LoginForm, Wrapper } from '../../components';
import { withAuth } from '../../hoc';

const LoginPage: FC = () => {
  return (
    <Wrapper hideHeader hideFooter>
      <Container title="Login">
        <LoginForm />
      </Container>
    </Wrapper>
  );
};

export const Login = withAuth(LoginPage);
