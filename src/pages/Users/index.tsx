import React, { FC } from 'react';
import { Wrapper, UsersTable } from '../../components';
import { withAuth } from '../../hoc';

const UsersPage: FC = () => {
  return (
    <Wrapper>
      <UsersTable />
    </Wrapper>
  );
};

export const Users = withAuth(UsersPage);
