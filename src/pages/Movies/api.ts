import { mapToArray } from '../../helpers';
import { Data, User } from '../../types';
import { myApi } from '../../utils';

const postUserDataMedia = async (
  currentUser: Partial<User | undefined>,
  movie: Data
): Promise<void> => {
  await myApi.post(`users/${currentUser?.id}/data-media.json`, movie);
};

const getUserDataMedia = async (currentUser: Partial<User | undefined>) => {
  const response = await myApi.get(`users/${currentUser?.id}/data-media.json`);
  console.log(response.data);
  return mapToArray(response.data);
};
const deleteUserDataMedia = async (
  currentUser: Partial<User | undefined>,
  movie: Data
): Promise<void> => {
  const data = await getUserDataMedia(currentUser);
  const deleteData = data.find((item) => item.id === movie.id);
  console.log(`users/${currentUser?.id}/data-media/${deleteData.idDB}.json`);
  await myApi.delete(
    `users/${currentUser?.id}/data-media/${deleteData.idDB}.json`
  );
};

export { deleteUserDataMedia, getUserDataMedia, postUserDataMedia };
