import React, { FC, useContext, useEffect, useState } from 'react';
import { getDataMedia } from '../../api/myApi';
import { CardGroup, Wrapper } from '../../components';
import { AuthContext } from '../../context/Auth';
import { withAuth } from '../../hoc';
import { Data } from '../../types';
import { postUserDataMedia } from './api';

const MoviesPage: FC = () => {
  const [data, setData] = useState<Data[]>();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    getDataMedia().then((response) => {
      const movies = response.filter((obj) => obj.media_type !== 'tv');
      setData(movies);
    });
  }, []);

  const handleButton = (movie: Data) => {
    postUserDataMedia(currentUser, movie);
  };
  return (
    <Wrapper hideFooter>
      <CardGroup handleButton={handleButton} items={data} />
    </Wrapper>
  );
};

export const Movies = withAuth(MoviesPage);
