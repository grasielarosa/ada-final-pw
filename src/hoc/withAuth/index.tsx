import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks';

const publicRoutes = ['/', '/login', '/sign-up'];

type withAuthenticationFn = (Component: FC) => FC;

const withAuth: withAuthenticationFn = (Component) => {
  const Authenticated: FC = (): JSX.Element | null => {
    const { push, location } = useHistory();

    const { isUserLoggedIn } = useAuth();

    console.log(isUserLoggedIn);

    // if (isUserLoggedIn === undefined) return <Loading />;
    if (isUserLoggedIn && publicRoutes.includes(location.pathname)) push('/');

    if (isUserLoggedIn === false && !publicRoutes.includes(location.pathname))
      push('/login');

    return <Component />;
  };

  return Authenticated;
};

export { withAuth };
