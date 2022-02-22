import { mapToArray } from '../../helpers';
import { User } from '../../types';
import { myApi } from '../../utils';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const deleteUser = async (id: string) => {
  try {
    await myApi.delete(`/users/${id}.json`);
  } catch (err) {
    throw new Error();
  }
};

const getUsersData = async (): Promise<User[]> => {
  try {
    const response = await myApi.get('/users.json');
    return mapToArray(response.data);
  } catch (err) {
    throw new Error();
  }
};

export { deleteUser, getUsersData };
