import { theMovieApi, myApi } from '../../utils';

const getDataMovies = async () => {
  const response = await theMovieApi.get('/movie/top_rated');
  return response.data.results;
};

const getSearchMulti = async (search: string | number) => {
  const response = await theMovieApi.get(`/search/multi?query=${search}`);
  return response.data.results;
};

const postDataMedia = async () => {
  // await myApi.post('data-media');
};

export { getDataMovies, getSearchMulti, postDataMedia };
