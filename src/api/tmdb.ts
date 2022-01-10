import { theMovieApi } from '../utils';

const getDataMovies = async () => {
  const response = await theMovieApi.get('/movie/popular');
  return response.data.results;
};

export { getDataMovies };
