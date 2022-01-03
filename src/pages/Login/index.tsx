import React from 'react';
import { getDataMovies } from '../../api/tmdb';
import { getDataUsers } from '../../api/myApi';

const Login = () => {
  getDataMovies();
  getDataUsers();
  return <div>hello, world</div>;
};

export { Login };
