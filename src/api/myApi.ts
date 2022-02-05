/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { mapToArray } from '../helpers';
import { Data, User } from '../types';
import { myApi } from '../utils';

// selección data

const getDataMedia = async () => {
  const response = await myApi.get('data-media.json');
  return mapToArray(response.data);
};

const postDataMedia = async (movie: Data): Promise<void> => {
  await myApi.post('data-media.json', movie);
};

const deleteDataMedia = async (movie: Data): Promise<void> => {
  const data = await getDataMedia();
  const deleteData = data.find((item) => item.id === movie.id);
  await myApi.delete(`data-media/${deleteData.idDB}.json`);
};

// selección user data

const getDataUsers = async () => {
  const response = await myApi.get('users');
  return response.data;
};

const getUserDataMedia = async (
  currentUser: Partial<User | undefined>
): Promise<Data[]> => {
  const response = await myApi.get(`users/${currentUser?.id}/data-media.json`);
  return mapToArray(response.data);
};

const postUserDataMedia = async (
  currentUser: Partial<User | undefined>,
  movie: Data
): Promise<void> => {
  await myApi.post(`users/${currentUser?.id}/data-media.json`, movie);
};

const deleteUserDataMedia = async (
  currentUser: Partial<User | undefined>,
  movie: Data
): Promise<void> => {
  const data = await getUserDataMedia(currentUser);
  const deleteData = data.find((item) => item.id === movie.id);
  await myApi.delete(
    `users/${currentUser?.id}/data-media/${deleteData?.idDB}.json`
  );
};

// selección watch

const postWatched = async (
  currentUser: Partial<User | undefined>,
  movie: Data
): Promise<void> => {
  await myApi.post(`users/${currentUser?.id}/data-media/watched.json`, movie);
};

const getWatched = async (currentUser: Partial<User | undefined>) => {
  const response = await myApi.get(
    `users/${currentUser?.id}/data-media/watched.json`
  );
  return mapToArray(response.data);
};

const deleteWatched = async (
  currentUser: Partial<User | undefined>,
  movie: Data
): Promise<void> => {
  const data = await getWatched(currentUser);
  const deleteData = data.find((item) => item.id === movie.id);
  await myApi.delete(
    `users/${currentUser?.id}/data-media/watched/${deleteData.idDB}.json`
  );
};

export {
  deleteDataMedia,
  deleteUserDataMedia,
  deleteWatched,
  getDataUsers,
  getDataMedia,
  getWatched,
  getUserDataMedia,
  postDataMedia,
  postUserDataMedia,
  postWatched,
};
