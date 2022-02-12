/* eslint-disable no-shadow */
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  deleteUserDataMedia,
  getDataFB,
  getUserDataMedia,
  postUserDataMedia,
} from '../../api/myApi';
import { AuthContext } from '../../context/Auth';
import { Data } from '../../types';

const useUsers = () => {
  // const { location } = useHistory();
  const [data, setData] = useState<Data[]>();
  const [dataUser, setDataUser] = useState<Data[]>();
  const { currentUser } = useContext(AuthContext);
  const [dataIds, setDataIds] = useState<(number | undefined)[]>();

  // eslint-disable-next-line consistent-return
  const isOnMyApiUser = (id: number) => {
    const isOnDB = dataIds?.find((items) => items === id);
    if (isOnDB) {
      return true;
    }
  };

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
    getDataFB().then((response) => {
      setData(response);
    });
  }, []);

  useEffect(() => {
    getUserDataMedia(currentUser).then((response) => {
      setDataUser(response);
      setDataIds(response.map((item) => item.id));
    });
  }, []);

  return {
    currentUser,
    data,
    dataIds,
    dataUser,
    setData,
    handleButton,
    isOnMyApiUser,
  };
};

export { useUsers };
