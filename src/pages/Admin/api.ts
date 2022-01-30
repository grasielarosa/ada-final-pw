/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { AxiosRequestConfig } from 'axios';
import { mapToArray } from '../../helpers';
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

const getDataMedia = async () => {
  const response = await myApi.get('data-media.json');
  console.log(response.data);
  return mapToArray(response.data);
};
const deleteDataMedia = async (movie: Data) => {
  const data = await getDataMedia();
  const deleteData = data.find((item) => item.id === movie.id);
  console.log(deleteData.idDB);
  await myApi.delete(`data-media/${deleteData.idDB}.json`);
};

export { getDataMovies, getSearchMulti, deleteDataMedia, postDataMedia };
