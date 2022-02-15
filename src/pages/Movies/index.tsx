import React from 'react';
import { CardGroup, Wrapper } from '../../components';
import { withAuth } from '../../hoc';
import { useUsers } from '../../hooks/useUsers';

const MoviesPage = () => {
  const { currentUser, dataFB } = useUsers();
  const res = dataFB?.filter((item) => item.media_type !== 'tv');

  return (
    <Wrapper hideFooter>
      {currentUser?.role !== 'admin' && <CardGroup items={res} />}
      {currentUser?.role === 'admin' && <CardGroup items={res} />}
    </Wrapper>
  );
};

export const Movies = withAuth(MoviesPage);
