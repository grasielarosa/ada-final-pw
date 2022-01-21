import React, { FC, useEffect, useState } from 'react';
import { getDataMedia } from '../../api/myApi';
import { CardGroup, Wrapper } from '../../components';
import { withAuth } from '../../hoc';
import { Data } from '../../types';

const SeriesPage: FC = () => {
  const [data, setData] = useState<Data[]>();

  useEffect(() => {
    getDataMedia().then((response) => {
      const series = response.filter((obj) => obj.media_type === 'tv');
      setData(series);
    });
  }, []);

  const handleButton = () => {
    // eslint-disable-next-line no-console
    console.log('oi');
  };

  return (
    <Wrapper hideFooter>
      <CardGroup handleButton={handleButton} items={data} />
    </Wrapper>
  );
};

export const Series = withAuth(SeriesPage);
