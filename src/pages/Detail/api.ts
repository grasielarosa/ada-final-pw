import { mapToArray } from '../../helpers';
import { myApi, theMovieApi } from '../../utils';
import { Data } from '../../types';

const getDataMediaDetail = async () => {
  const response = await myApi.get<Data>(`data-media.json`);
  return mapToArray(response.data);
};

const getVideos = async (id: number) => {
  const response = await theMovieApi.get(`/movie/${id}/videos`);
  return mapToArray(response.data.results);
};
const getSeries = async (id: number) => {
  const response = await theMovieApi.get(`/tv/${id}/videos`);
  return response.data.results;
};

export { getDataMediaDetail, getSeries, getVideos };
