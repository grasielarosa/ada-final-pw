import { mapToArray } from '../../helpers';
import { myApi } from '../../utils';
import { Data } from '../../types';

const getDataMediaDetail = async (): Promise<Data[]> => {
  const response = await myApi.get<Data>(`data-media.json`);
  return mapToArray(response.data);
};
export { getDataMediaDetail };
