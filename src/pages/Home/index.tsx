import React from 'react';
import { Admin, CardGroup, Wrapper } from '../../components';
import { withAuth } from '../../hoc';
import { useUsers } from '../../hooks/useUsers';

const HomePage = () => {
  const { handleButtonWatch, currentUser, data } = useUsers();

  return (
    <Wrapper>
      {currentUser?.role !== 'admin' && (
        <CardGroup handleButton={handleButtonWatch} items={data} />
      )}
      {currentUser?.role === 'admin' && <Admin />}
    </Wrapper>
  );
};

export const Home = withAuth(HomePage);
