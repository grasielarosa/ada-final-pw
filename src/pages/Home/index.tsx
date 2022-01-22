import React, { useContext, useEffect, useState } from 'react';

import { CardGroup, Wrapper } from '../../components';
import { AuthContext } from '../../context/Auth';
import { withAuth } from '../../hoc';
import { Data } from '../../types';
import { getUserDataMedia } from './api';

const HomePage = () => {
  const [data, setData] = useState<Data[]>();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    getUserDataMedia(currentUser).then((response) => {
      setData(response);
    });
  }, []);

  const handleButton = () => {
    console.log('oi');
  };

  return (
    <Wrapper hideFooter>
      <CardGroup handleButton={handleButton} items={data} />
    </Wrapper>
  );
};

export const Home = withAuth(HomePage);
