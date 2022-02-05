import { ApiResponse } from '../types';
import { theMovieApi } from '../utils';

const getDataTMDB = async (
  page: number,
  search?: string
): Promise<ApiResponse> => {
  let response;

  if (search) {
    response = await theMovieApi.get<ApiResponse>(
      `/search/multi?query=${search}&page=${page}`
    );
  } else {
    response = await theMovieApi.get<ApiResponse>(
      `/movie/top_rated?page=${page}`
    );
  }
  return response.data;
};

export { getDataTMDB };
