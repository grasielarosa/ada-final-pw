import React from 'react';
import { getUserDataMedia } from '../../api/myApi';
import { Admin, CardGroup, Wrapper } from '../../components';
import { withAuth } from '../../hoc';
import { useUsers } from '../../hooks/useUsers';

const HomePage = () => {
  const { data, dataIds, setData, handleButtonWatch, currentUser } = useUsers();

  // if (!data) {
  //   getUserDataMedia(currentUser).then((response) => {
  //     setData(response);
  //     console.log(response);
  //   });
  // }
  console.log(dataIds);
  return (
    <Wrapper>
      {currentUser?.role !== 'admin' && (
        <CardGroup items={data} handleButton={handleButtonWatch} />
      )}
      {currentUser?.role === 'admin' && <Admin />}
    </Wrapper>
  );
};

export const Home = withAuth(HomePage);
