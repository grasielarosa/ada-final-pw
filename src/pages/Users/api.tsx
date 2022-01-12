import { mapToArray } from '../../helpers';
import { User } from '../../types';
import { myApi } from '../../utils';

const deleteUser = async (id: string) => {
  await myApi.delete(`/user.json/${id}`);
};

const getUsersData = async (): Promise<User[]> => {
  const response = await myApi.get('/users.json');
  return mapToArray(response.data);
};

export { deleteUser, getUsersData };
