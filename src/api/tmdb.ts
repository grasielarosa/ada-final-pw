import { ApiResponse, Params } from '../types';
import { theMovieApi } from '../utils';

const getDataMovies = async ({
  page,
  search,
}: Params): Promise<ApiResponse> => {
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

export { getDataMovies };
