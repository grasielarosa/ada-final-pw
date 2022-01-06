import React from 'react';
import { getDataMovies } from '../../api/tmdb';
import { CardGroup, Wrapper } from '../../components';

const Movies = () => {
  return (
    <Wrapper hideFooter>
      <CardGroup />
    </Wrapper>
  );
};

export { Movies };
