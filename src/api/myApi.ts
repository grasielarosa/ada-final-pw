/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { mapToArray } from '../helpers';
import { myApi } from '../utils';

const getDataUsers = async () => {
  const response = await myApi.get('users');
  return response.data;
};

const getDataMedia = async () => {
  const response = await myApi.get('data-media.json');
  return mapToArray(response.data);
};

export { getDataMedia, getDataUsers };
