import { mapToArray } from '../../helpers';
import { User } from '../../types';
import { myApi } from '../../utils';

const getUserDataMedia = async (currentUser: Partial<User | undefined>) => {
  const response = await myApi.get(`users/${currentUser?.id}/data-media.json`);
  return mapToArray(response.data);
};
export { getUserDataMedia };
