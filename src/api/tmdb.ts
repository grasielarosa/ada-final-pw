import { theMovieApi } from '../utils';

const getDataMovies = async () => {
  const response = await theMovieApi.get('/movie/popular');
  console.log(response.data.results);
  return response.data.results;
};

export { getDataMovies };
