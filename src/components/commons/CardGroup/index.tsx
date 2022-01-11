/* eslint-disable import/no-unresolved */
import React, { EventHandler, FC } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Row,
} from 'reactstrap';

import defaultImage from '../../../assets/images/image-not-found.jpeg';
import { Data } from '../../../types';

type Props = {
  api: Data[] | undefined;
  handleButton: EventHandler<React.SyntheticEvent<any, Event>>;
};

const CardGroup: FC<Props> = ({ api, handleButton }) => {
  const cardImage = (image: string | null) =>
    !image ? defaultImage : `http://image.tmdb.org/t/p/w500/${image}`;

  return (
    <Row
      className="
    g-3
    row-cols-2
    row-cols-sm-3
    row-cols-lg-4
    row-cols-xl-5
    row-cols-xl-7
    rounded"
    >
      {api?.map((movie) => (
        <Card key={movie.id} className="bg-secondary text-primary">
          <CardImg
            alt="teste"
            src={cardImage(movie.poster_path)}
            top
            width="100%"
            className="rounded"
          />
          <CardBody>
            <CardTitle tag="h5">{movie.original_title}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {movie.vote_average}
            </CardSubtitle>
            <CardText>{movie.popularity}</CardText>
            <Button onClick={handleButton} className="align-self-end">
              add
            </Button>
          </CardBody>
        </Card>
      ))}
    </Row>
  );
};

export { CardGroup };
