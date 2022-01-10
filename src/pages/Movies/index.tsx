import React, { FC } from 'react';
import { Wrapper } from '../../components';
import { withAuth } from '../../hoc';

const MoviesPage: FC = () => {
  return (
    <Wrapper hideFooter>
      <h1>movies</h1>
    </Wrapper>
  );
};

export const Movies = withAuth(MoviesPage);
