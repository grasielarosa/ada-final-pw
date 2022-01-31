/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { mapToArray } from '../helpers';
import { Data } from '../types';
import { myApi } from '../utils';

const getDataMedia = async () => {
  const response = await myApi.get('data-media.json');
  return mapToArray(response.data);
};

const getDataUsers = async () => {
  const response = await myApi.get('users');
  return response.data;
};

const postDataMedia = async (movie: Data): Promise<void> => {
  await myApi.post('data-media.json', movie);
};

const deleteDataMedia = async (movie: Data): Promise<void> => {
  const data = await getDataMedia();
  const deleteData = data.find((item) => item.id === movie.id);
  await myApi.delete(`data-media/${deleteData.idDB}.json`);
};

export { deleteDataMedia, getDataUsers, getDataMedia, postDataMedia };
