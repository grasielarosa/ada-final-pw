import React, { FC, useContext, useEffect, useState } from 'react';
import { getDataMedia } from '../../api/myApi';
import { CardGroup, Wrapper } from '../../components';
import { AuthContext } from '../../context/Auth';
import { withAuth } from '../../hoc';
import { Data } from '../../types';
import { postUserDataMedia } from './api';

const SeriesPage: FC = () => {
  const [data, setData] = useState<Data[]>();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    getDataMedia().then((response) => {
      const series = response.filter((obj) => obj.media_type === 'tv');
      setData(series);
    });
  }, []);

  const handleButton = (series: Data) => {
    postUserDataMedia(currentUser, series);
  };

  return (
    <Wrapper hideFooter>
      <CardGroup handleButton={handleButton} items={data} />
    </Wrapper>
  );
};

export const Series = withAuth(SeriesPage);
