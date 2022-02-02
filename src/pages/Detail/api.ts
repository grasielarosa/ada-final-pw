import { mapToArray } from '../../helpers';
import { myApi, theMovieApi } from '../../utils';
import { Data, Movies } from '../../types';

const getDataMediaDetail = async () => {
  const response = await myApi.get<Data>(`data-media.json`);
  return mapToArray(response.data);
};

const getDataMediaDetail2 = async () => {
  const response = await myApi.get<Data>(`data-media.json`);
  return response.data;
};

const getVideos = async (id: number) => {
  const response = await theMovieApi.get(`/movie/${id}/videos`);
  return response.data;
};
const getSeries = async (id: number) => {
  const response = await theMovieApi.get(`/tv/${id}/videos`);
  return response.data.results;
};

export { getDataMediaDetail, getSeries, getVideos };
