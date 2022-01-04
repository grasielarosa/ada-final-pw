import React, { FC } from 'react';

import { Container, Login as LoginForm } from '../../components';

const Login: FC = () => {
  return (
    <Container title="Login">
      <LoginForm />
    </Container>
  );
};

export { Login };
