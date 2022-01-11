import { myApi } from '../utils';

const getDataUsers = async () => {
  const response = await myApi.get('users');
  return response.data;
};

export { getDataUsers };
