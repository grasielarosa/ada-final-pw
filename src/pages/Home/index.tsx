/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../components';
import { withAuth } from '../../hoc';
import { User as UserType } from '../../types';
import { getUser } from './api';

type ParamsType = {
  id: string;
};

const HomePage = () => {
  const [currentUser, setCurrentUser] = useState<UserType>();
  const { id } = useParams<ParamsType>();

  useEffect(() => {
    getUser(id).then((response) => {
      setCurrentUser(response);
    });
  }, []);
  return (
    <>
      <Header />
      <h3 className="text-secondary">Welcome {id}</h3>
      <ul className="text-secondary">
        <li>{currentUser?.name}</li>
        <li>{currentUser?.email}</li>
        <li>{currentUser?.role}</li>
      </ul>
    </>
  );
};

export const Home = withAuth(HomePage);
