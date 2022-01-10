import React, { FC } from 'react';
import { withAuth } from '../../hoc';

const SeriesPage: FC = () => {
  return <div>series</div>;
};

export const Series = withAuth(SeriesPage);
