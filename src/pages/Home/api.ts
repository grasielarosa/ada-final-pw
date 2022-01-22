import { mapToArray } from '../../helpers';
import { User } from '../../types';
import { myApi } from '../../utils';

// const getUser = async (id: string): Promise<User> => {
//   const response = await myApi.get<User>(`users/${id}.json`);
//   return response.data;
// };

const getUserDataMedia = async (currentUser: Partial<User | undefined>) => {
  const response = await myApi.get(`users/${currentUser?.id}/data-media.json`);
  return mapToArray(response.data);
};
export { /* getUser */ getUserDataMedia };
