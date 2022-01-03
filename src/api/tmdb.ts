import { theMovieApi } from '../utils';

type Test = [
  {
    id: number;
    name: string;
  }
];

const getDataMovies = async (): Promise<Test> => {
  const response = await theMovieApi.get('genre/movie/list');
  console.log(response.data);
  return response.data;
};

export { getDataMovies };
