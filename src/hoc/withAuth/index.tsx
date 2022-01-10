import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Loading } from '../../components/commons';
import { useAuth } from '../../hooks';

const publicRoutes = ['/login', '/sign-up', '/'];

type withAuthenticationFn = (Component: FC) => FC;

const withAuth: withAuthenticationFn = (Component) => {
  const Authenticated: FC = (): JSX.Element | null => {
    const { push, location } = useHistory();

    const { isUserLoggedIn } = useAuth();

    if (isUserLoggedIn === undefined) return <Loading />;

    if (!isUserLoggedIn && !publicRoutes.includes(location.pathname))
      push('/login');

    if (isUserLoggedIn && publicRoutes.includes(location.pathname))
      push('/home');

    return <Component />;
  };

  return Authenticated;
};

export { withAuth };
