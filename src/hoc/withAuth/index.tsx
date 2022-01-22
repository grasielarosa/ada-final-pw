import React, { FC, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Loading } from '../../components/commons';
import { AuthContext } from '../../context/Auth';
import { useAuth } from '../../hooks';

const publicRoutes = ['/login', '/sign-up', '/'];
const privateRoutes = ['/users', '/admin'];

type withAuthenticationFn = (Component: FC) => FC;

const withAuth: withAuthenticationFn = (Component) => {
  const Authenticated: FC = (): JSX.Element | null => {
    const { currentUser } = useContext(AuthContext);
    const { push, location } = useHistory();
    const { isUserLoggedIn } = useAuth();

    if (isUserLoggedIn === undefined) return <Loading />;

    if (!isUserLoggedIn && !publicRoutes.includes(location.pathname))
      push('/login');

    if (isUserLoggedIn && publicRoutes.includes(location.pathname))
      push('/home');

    if (currentUser === undefined && privateRoutes.includes(location.pathname))
      return <Loading />;

    if (
      currentUser?.role !== 'admin' &&
      privateRoutes.includes(location.pathname)
    )
      push('/home');

    return <Component />;
  };

  return Authenticated;
};

export { withAuth };
