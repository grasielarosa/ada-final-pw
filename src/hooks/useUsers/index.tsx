/* eslint-disable no-shadow */
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  deleteUserDataMedia,
  deleteWatched,
  getDataMedia,
  getWatched,
  getUserDataMedia,
  postUserDataMedia,
  postWatched,
} from '../../api/myApi';
import { AuthContext } from '../../context/Auth';
import { Data } from '../../types';

const useUsers = () => {
  const { location } = useHistory();
  const [data, setData] = useState<Data[]>();
  const { currentUser } = useContext(AuthContext);
  const [dataIds, setDataIds] = useState<(number | undefined)[]>();
  const [watched, setWatched] = useState<Data[]>();
  const [watchedIds, setWatchedIds] = useState<(number | undefined)[]>();

  // data
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
          console.log(response);
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

  useEffect(() => {
    getWatched(currentUser).then((response) => {
      setWatchedIds(response.map((item) => item.id));
    });
  }, []);

  const handleButtonWatch = (movie: Data) => {
    if (!watchedIds?.includes(movie.id)) {
      postWatched(currentUser, movie);
      getWatched(currentUser).then((response) => {
        setWatched(response.map((item) => item.id));
      });
    }
    if (watchedIds?.includes(movie.id)) {
      deleteWatched(currentUser, movie);
      getWatched(currentUser).then((response) => {
        setWatched(response.map((item) => item.id));
      });
    }
  };
  return {
    currentUser,
    data,
    dataIds,
    setData,
    handleButton,
    handleButtonWatch,
    watched,
  };
};

export { useUsers };
