import axios from 'axios';

const theMovieApi = axios.create({
  baseURL: process.env.REACT_APP_DB_API,
  params: {
    api_key: process.env.REACT_APP_DB_API_KEY,
    include_adult: false,
  },
});
const myApi = axios.create({
  baseURL: process.env.REACT_APP_DB_MY_API,
});

export { theMovieApi, myApi };
