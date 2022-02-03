/* eslint-disable no-shadow */
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  deleteUserDataMedia,
  getDataMedia,
  getUserDataMedia,
  postUserDataMedia,
} from '../../api/myApi';
import { AuthContext } from '../../context/Auth';
import { Data } from '../../types';

const useUsers = () => {
  const { location } = useHistory();
  const [data, setData] = useState<Data[]>();
  const { currentUser } = useContext(AuthContext);
  const [dataIds, setDataIds] = useState<(number | undefined)[]>();

  useEffect(() => {
    getDataMedia().then((response) => {
      if (location.pathname.includes('/movie')) {
        const movies = response.filter((obj) => obj.media_type !== 'tv');
        setData(movies);
      }
      if (location.pathname.includes('/series')) {
        const series = response.filter((obj) => obj.media_type === 'tv');
        setData(series);
      }
      if (location.pathname.includes('/home')) {
        getUserDataMedia(currentUser).then((response) => {
          setData(response);
        });
      }
    });
  }, []);

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
  return { currentUser, data, setData, handleButton };
};

export { useUsers };
