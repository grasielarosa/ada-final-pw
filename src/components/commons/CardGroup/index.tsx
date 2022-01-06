import React, { FC, useEffect, useState } from 'react';
import { Card, Col, Row } from 'reactstrap';
import { getDataMovies } from '../../../api/tmdb';
import { Data } from '../../../types';

const CardGroup: FC = () => {
  const [data, setData] = useState<Data[]>();

  useEffect(() => {
    getDataMovies().then((response) => {
      setData(response);
    });
  }, []);

  return (
    <Row
      className="

    row-cols-1
    row-cols-sm-2
    row-cols-md-3
    row-cols-lg-4
    row-cols-xl-5
    row-cols-xl-7
    g-3
    bg-secondary
    rounded"
    >
      {data?.map((movie) => (
        <Card key={movie.id}>
          {movie.original_title}
          <br />
          {movie.backdrop_path}
          <br />
          {movie.overview}
        </Card>
      ))}
    </Row>
  );
};

export { CardGroup };
