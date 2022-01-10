import React from 'react';
import { Header } from '../../components';
import { withAuth } from '../../hoc';

const HomePage = () => {
  return (
    <>
      <Header />
      <h2 className="text-secondary mt-5">home</h2>
    </>
  );
};

export const Home = withAuth(HomePage);
