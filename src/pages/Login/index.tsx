import React, { FC } from 'react';

import { Container, Login as LoginForm, Wrapper } from '../../components';

const Login: FC = () => {
  return (
    <Wrapper hideHeader hideFooter>
      <Container title="Login">
        <LoginForm />
      </Container>
    </Wrapper>
  );
};

export { Login };
