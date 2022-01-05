import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { mapToArray } from '../../helpers';
import { User } from '../../types';
import { myApi } from '../../utils';

type Payload = Omit<User, 'id' | 'birthdate' | 'name'>;

const useAuth = () => {
  const [tokenStorage, setTokenStorage] = useState<string | undefined>(
    localStorage.getItem('') || undefined
  );
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>();

  const { push } = useHistory();

  useEffect(() => {
    if (tokenStorage) localStorage.setItem('cinemada-token', tokenStorage);
  }, [tokenStorage]);

  const createUserToken = async (user: User): Promise<string | null> => {
    const newToken = Math.random().toString(36).substr(2);

    try {
      await myApi.patch(`users/${user.id}.json`, { sessionToken: newToken });
      return newToken;
    } catch (err) {
      return null;
    }
  };
  /**
   * @param email
   * @param password
   */
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
          // setCurrentUser(user);
          // setIsUserLoggedIn(true);
        } else {
          setIsUserLoggedIn(false);
        }
      } else {
        throw new Error('el usuario no existe o la contraseña es erronea');
      }
    } catch (e) {
      // console.log(e);
    }
  };

  // const loginWithToken = () => {};

  // const logout = () => {
  //   localStorage.removeItem('');
  //   // push('login');
  // };
  return { login };
};

export { useAuth };
