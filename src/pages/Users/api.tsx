import { mapToArray } from '../../helpers';
import { User } from '../../types';
import { myApi } from '../../utils';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const deleteUser = async (id: string) => {
  await myApi.delete(`/users/${id}.json`);
};

const getUsersData = async (): Promise<User[]> => {
  const response = await myApi.get('/users.json');
  return mapToArray(response.data);
};

export { deleteUser, getUsersData };
