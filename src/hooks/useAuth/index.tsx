/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-use-before-define */

import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/Auth';
import { mapToArray } from '../../helpers';
import { User } from '../../types';
import { myApi } from '../../utils';

type Payload = Omit<User, 'id'>;

const useAuth = () => {
  const [tokenStorage, setTokenStorage] = useState<string | undefined>(
    localStorage.getItem('cinemada-token') || undefined
  );
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>();

  const { setCurrentUser } = useContext(AuthContext);

  const { push } = useHistory();

  useEffect(() => {
    if (tokenStorage) localStorage.setItem('cinemada-token', tokenStorage);
  }, [tokenStorage]);

  useEffect(() => {
    loginWithToken();
  }, []);

  const createUserToken = async (user: User): Promise<string | null> => {
    const newToken = Math.random().toString(36).substr(2);

    try {
      await myApi.patch(`users/${user.id}.json`, { sessionToken: newToken });
      return newToken;
    } catch (err) {
      return null;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await myApi.get('/users.json');

      const users: User[] = mapToArray(response.data);

      const findUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (findUser) {
        const token = await createUserToken(findUser);

        if (token) {
          setTokenStorage(token);
          push('/home');
        }
      } else {
        throw new Error('The user or password is incorrect');
      }
    } catch (err) {
      throw new Error();
    }
  };

  const loginWithToken = async () => {
    let findUser;

    try {
      const response = await myApi.get('/users.json');

      const users: User[] = mapToArray(response.data);

      if (tokenStorage) {
        findUser = users.find((user) => user.sessionToken === tokenStorage);
      }

      if (findUser) {
        setIsUserLoggedIn(true);
        setCurrentUser(findUser);
      } else {
        setIsUserLoggedIn(false);
      }
    } catch (err) {
      throw new Error();
    }
  };

  const signup = async (payload: Payload) => {
    try {
      await myApi.post('/users.json', payload);
    } catch (err) {
      throw new Error();
    }
  };

  const logout = () => {
    localStorage.removeItem('cinemada-token');
    setIsUserLoggedIn(false);
    setCurrentUser(undefined);
    push('/');
  };

  return { isUserLoggedIn, login, loginWithToken, logout, signup };
};

export { useAuth };
