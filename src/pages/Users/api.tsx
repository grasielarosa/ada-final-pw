import { UsersTable } from '../../components';
import { mapToArray } from '../../helpers';
import { User } from '../../types';
import { myApi } from '../../utils';

const deleteUser = async (id: string) => {
  await myApi.delete(`/users/${id}.json`);
};

const getUsersData = async (): Promise<User[]> => {
  const response = await myApi.get('/users.json');
  return mapToArray(response.data);
};

export { deleteUser, getUsersData };
