import React, { FC, useEffect, useState } from 'react';
import { getDataMedia } from '../../api/myApi';
import { CardGroup, Wrapper } from '../../components';
import { withAuth } from '../../hoc';
import { Data } from '../../types';

const MoviesPage: FC = () => {
  const [data, setData] = useState<Data[]>();

  useEffect(() => {
    getDataMedia().then((response) => {
      const movies = response.filter((obj) => obj.media_type !== 'tv');
      setData(movies);
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

export const Movies = withAuth(MoviesPage);
