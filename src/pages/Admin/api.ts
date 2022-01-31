import { mapToArray } from '../../helpers';
import { Data } from '../../types';
import { myApi } from '../../utils';

const postDataMedia = async (movie: Data): Promise<void> => {
  await myApi.post('data-media.json', movie);
};

const getDataMedia = async () => {
  const response = await myApi.get('data-media.json');
  console.log(response.data);
  return mapToArray(response.data);
};
const deleteDataMedia = async (movie: Data) => {
  const data = await getDataMedia();
  const deleteData = data.find((item) => item.id === movie.id);
  console.log(deleteData.idDB);
  await myApi.delete(`data-media/${deleteData.idDB}.json`);
};

export { deleteDataMedia, postDataMedia };
