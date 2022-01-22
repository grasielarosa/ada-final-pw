import { Data, User } from '../../types';
import { myApi } from '../../utils';

const postUserDataMedia = async (
  currentUser: Partial<User | undefined>,
  series: Data
): Promise<void> => {
  await myApi.post(`users/${currentUser?.id}/data-media.json`, series);
};

export { postUserDataMedia };
