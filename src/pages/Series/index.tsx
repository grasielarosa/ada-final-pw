import React, { FC } from 'react';
import { CardGroup, Wrapper } from '../../components';
import { withAuth } from '../../hoc';
import { useUsers } from '../../hooks/useUsers';

const SeriesPage: FC = () => {
  const { data, handleButton } = useUsers();
  const res = data?.filter((item) => item.media_type === 'tv');

  return (
    <Wrapper hideFooter>
      <CardGroup items={res} handleButton={handleButton} />
    </Wrapper>
  );
};

export const Series = withAuth(SeriesPage);
