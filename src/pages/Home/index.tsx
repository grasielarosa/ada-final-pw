import React from 'react';
import { Admin, CardGroup, Wrapper } from '../../components';
import { withAuth } from '../../hoc';
import { useUsers } from '../../hooks/useUsers';

const HomePage = () => {
  const { currentUser, dataUser, handleButton } = useUsers();

  return (
    <Wrapper>
      {currentUser?.role !== 'admin' && (
        <CardGroup handleButton={handleButton} items={dataUser} />
      )}
      {currentUser?.role === 'admin' && <Admin />}
    </Wrapper>
  );
};

export const Home = withAuth(HomePage);
