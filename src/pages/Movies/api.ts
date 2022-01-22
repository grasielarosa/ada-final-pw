import { Data, User } from '../../types';
import { myApi } from '../../utils';

const postUserDataMedia = async (
  currentUser: Partial<User | undefined>,
  movie: Data
): Promise<void> => {
  await myApi.post(`users/${currentUser?.id}/data-media.json`, movie);
};

export { postUserDataMedia };
