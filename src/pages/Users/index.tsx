import React, { FC } from 'react';
import { Wrapper } from '../../components';
import { withAuth } from '../../hoc';

const UsersPage: FC = () => {
  return (
    <Wrapper>
      <h1>users</h1>
    </Wrapper>
  );
};

export const Users = withAuth(UsersPage);
