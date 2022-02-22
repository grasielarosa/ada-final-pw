import { mapToArray } from '../../helpers';
import { myApi, theMovieApi } from '../../utils';
import { Data } from '../../types';

const getDataMediaDetail = async () => {
  try {
    const response = await myApi.get<Data>(`data-media.json`);
    return mapToArray(response.data);
  } catch (err) {
    throw new Error();
  }
};

const getVideos = async (id: number) => {
  try {
    const response = await theMovieApi.get(`/movie/${id}/videos`);
    return mapToArray(response.data.results);
  } catch (err) {
    throw new Error();
  }
};
const getSeries = async (id: number) => {
  try {
    const response = await theMovieApi.get(`/tv/${id}/videos`);
    return response.data.results;
  } catch (err) {
    throw new Error();
  }
};

export { getDataMediaDetail, getSeries, getVideos };
