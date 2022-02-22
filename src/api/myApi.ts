/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { mapToArray } from '../helpers';
import { Data, User } from '../types';
import { myApi } from '../utils';

const getDataFB = async () => {
  try {
    const response = await myApi.get('data-media.json');
    return mapToArray(response.data);
  } catch (err) {
    throw new Error();
  }
};

const postDataMedia = async (movie: Data): Promise<void> => {
  try {
    await myApi.post('data-media.json', movie);
  } catch (err) {
    throw new Error();
  }
};

const deleteDataMedia = async (movie: Data): Promise<void> => {
  try {
    const data = await getDataFB();
    const deleteData = data.find((item) => item.id === movie.id);
    await myApi.delete(`data-media/${deleteData.idDB}.json`);
  } catch (err) {
    throw new Error();
  }
};

const getDataUsers = async () => {
  try {
    const response = await myApi.get('users');
    return response.data;
  } catch (err) {
    throw new Error();
  }
};

const getUserDataMedia = async (
  currentUser: Partial<User | undefined>
): Promise<Data[]> => {
  try {
    const response = await myApi.get(
      `users/${currentUser?.id}/data-media.json`
    );
    return mapToArray(response.data);
  } catch (err) {
    throw new Error();
  }
};

const postUserDataMedia = async (
  currentUser: Partial<User | undefined>,
  movie: Data
): Promise<void> => {
  try {
    await myApi.post(`users/${currentUser?.id}/data-media.json`, movie);
  } catch (err) {
    throw new Error();
  }
};

const deleteUserDataMedia = async (
  currentUser: Partial<User | undefined>,
  movie: Data
): Promise<void> => {
  try {
    const data = await getUserDataMedia(currentUser);
    const deleteData = data.find((item) => item.id === movie.id);
    await myApi.delete(
      `users/${currentUser?.id}/data-media/${deleteData?.idDB}.json`
    );
  } catch (err) {
    throw new Error();
  }
};

export {
  deleteDataMedia,
  deleteUserDataMedia,
  getDataUsers,
  getDataFB,
  getUserDataMedia,
  postDataMedia,
  postUserDataMedia,
};
