import { User } from '../../types';
import { myApi } from '../../utils';

const getUser = async (id: string): Promise<User> => {
  const response = await myApi.get<User>(`users/${id}.json`);
  return response.data;
};
export { getUser };
