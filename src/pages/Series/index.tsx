import React, { FC, useContext, useEffect, useState } from 'react';
import { getDataMedia } from '../../api/myApi';
import { CardGroup, Wrapper } from '../../components';
import { AuthContext } from '../../context/Auth';
import { withAuth } from '../../hoc';
import { Data } from '../../types';
import {
  deleteUserDataMedia,
  getUserDataMedia,
  postUserDataMedia,
} from './api';

const SeriesPage: FC = () => {
  const [data, setData] = useState<Data[]>();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    getDataMedia().then((response) => {
      const series = response.filter((obj) => obj.media_type === 'tv');
      setData(series);
    });
  }, []);

  const [dataIds, setDataIds] = useState<(number | undefined)[]>();

  useEffect(() => {
    getUserDataMedia(currentUser).then((response) => {
      setDataIds(response.map((item) => item.id));
    });
  }, []);

  const handleButton = (movie: Data) => {
    if (!dataIds?.includes(movie.id)) {
      postUserDataMedia(currentUser, movie);
      getUserDataMedia(currentUser).then((response) => {
        setDataIds(response.map((item) => item.id));
      });
    }
    if (dataIds?.includes(movie.id)) {
      deleteUserDataMedia(currentUser, movie);
      getUserDataMedia(currentUser).then((response) => {
        setDataIds(response.map((item) => item.id));
      });
    }
  };

  return (
    <Wrapper hideFooter>
      <CardGroup handleButton={handleButton} items={data} />
    </Wrapper>
  );
};

export const Series = withAuth(SeriesPage);
