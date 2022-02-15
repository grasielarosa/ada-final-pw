import React, { useContext, useEffect, useState } from 'react';
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
  const [dataFB, setDataFB] = useState<Data[]>();
  const [dataUser, setDataUser] = useState<Data[]>();
  const { currentUser } = useContext(AuthContext);
  const [dataIdsUser, setDataIdsUser] = useState<(number | undefined)[]>();

  // eslint-disable-next-line consistent-return
  const isOnMyApiUser = (id: number) => {
    const res = dataIdsUser?.find((items) => items === id);
    if (res) {
      return true;
    }
  };

  const handleButton = async (movie: Data) => {
    // eslint-disable-next-line no-unused-expressions
    dataIdsUser?.includes(movie.id)
      ? await deleteUserDataMedia(currentUser, movie)
      : await postUserDataMedia(currentUser, movie);
    getUserDataMedia(currentUser).then((response) => {
      setDataUser(response);
      setDataIdsUser(response.map((item) => item.id));
    });
    getDataFB().then((response) => {
      setDataFB(response);
    });
  };

  useEffect(() => {
    getDataFB().then((response) => {
      setDataFB(response);
    });
  }, []);

  useEffect(() => {
    getUserDataMedia(currentUser).then((response) => {
      setDataUser(response);
      setDataIdsUser(response.map((item) => item.id));
    });
  }, []);

  return {
    currentUser,
    dataFB,
    dataIdsUser,
    dataUser,
    setDataFB,
    handleButton,
    isOnMyApiUser,
  };
};

export { useUsers };
