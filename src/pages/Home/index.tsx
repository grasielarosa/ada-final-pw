import React from 'react';
import { Admin, User, Wrapper } from '../../components';
import { withAuth } from '../../hoc';
import { useUsers } from '../../hooks/useUsers';

const HomePage = () => {
  const { currentUser, dataUser, handleButton } = useUsers();

  return (
    <Wrapper>
      {currentUser?.role !== 'admin' && <User />}
      {currentUser?.role === 'admin' && <Admin />}
    </Wrapper>
  );
};

export const Home = withAuth(HomePage);
