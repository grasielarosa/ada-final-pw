import React, { FC } from 'react';
import { CardGroup, Wrapper } from '../../components';
import { withAuth } from '../../hoc';
import { useUsers } from '../../hooks/useUsers';

const SeriesPage: FC = () => {
  const { data, handleButton } = useUsers();

  return (
    <Wrapper hideFooter>
      <CardGroup handleButton={handleButton} items={data} />
    </Wrapper>
  );
};

export const Series = withAuth(SeriesPage);
