import React, { FC } from 'react';
import { Wrapper } from '../../components';
import { withAuth } from '../../hoc';

const DetailPage: FC = () => {
  return (
    <Wrapper>
      <h1>teste</h1>
    </Wrapper>
  );
};

export const Detail = withAuth(DetailPage);
