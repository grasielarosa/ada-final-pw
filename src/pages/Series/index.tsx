import React, { FC } from 'react';
import { CardGroup, Wrapper } from '../../components';
import { withAuth } from '../../hoc';
import { useData } from '../../hooks/useData';
import { useUsers } from '../../hooks/useUsers';

const SeriesPage: FC = () => {
  const { currentUser, data, handleButton } = useUsers();
  const { handleButtonData } = useData();
  const res = data?.filter((item) => item.media_type === 'tv');

  return (
    <Wrapper hideFooter>
      {currentUser?.role !== 'admin' && (
        <CardGroup items={res} handleButton={handleButton} />
      )}
      {currentUser?.role === 'admin' && (
        <CardGroup items={res} handleButton={handleButtonData} />
      )}
    </Wrapper>
  );
};

export const Series = withAuth(SeriesPage);
