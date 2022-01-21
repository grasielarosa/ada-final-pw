/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { User } from '../../../types';
import { myApi } from '../../../utils';

type Payload = Omit<User, 'id'>;

const signup = async (payload: Payload) => {
  await myApi.post('/users.json', payload);
};

export { signup };
