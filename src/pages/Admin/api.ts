/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { AxiosRequestConfig } from 'axios';
import { Data } from '../../types';
import { theMovieApi, myApi } from '../../utils';

const getDataMovies = async () => {
  const response = await theMovieApi.get('/movie/top_rated');
  return response.data.results;
};

const getSearchMulti = async (search: string | number) => {
  const response = await theMovieApi.get(`/search/multi?query=${search}`);
  return response.data.results;
};

const postDataMedia = async (movie: Data): Promise<void> => {
  await myApi.post('data-media.json', movie);
};

const deleteDataMedia = async (movie: Data) => {
  const config = {
    data: {
      del: movie,
    },
  };
  await myApi.delete('data-media.json', config);
};

export { getDataMovies, getSearchMulti, deleteDataMedia, postDataMedia };
