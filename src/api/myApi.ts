import { myApi } from '../utils';

type Test = [
  {
    id: {
      name: string;
      email: string;
      password: string;
    };
  }
];

const getDataUsers = async (): Promise<Test> => {
  const response = await myApi.get('users');
  console.log(response.data);
  return response.data;
};

export { getDataUsers };
