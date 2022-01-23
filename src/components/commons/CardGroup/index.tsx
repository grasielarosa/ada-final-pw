/* eslint-disable import/no-unresolved */
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row,
} from 'reactstrap';

import defaultImage from '../../../assets/images/image-not-found.jpeg';
import { Data } from '../../../types';

type Props = {
  items?: Data[];
  handleButton: (movie: Data) => void;
};

const CardGroup: FC<Props> = ({ items, handleButton }) => {
  const cardImage = (image: string | null) =>
    !image ? defaultImage : `http://image.tmdb.org/t/p/w500/${image}`;

  return (
    <Row
      sm="3"
      md="4"
      lg="4"
      className="
    g-3
    align-items-stretch
    rounded"
    >
      {items?.map((movie) => (
        <Col key={movie.id}>
          <Link to={`/detail/${movie.id}`}>
            <Card className="bg-secondary text-primary h-100">
              <CardImg
                alt="teste"
                src={cardImage(movie.poster_path)}
                top
                width="100%"
                className="rounded"
              />
              <CardBody>
                <CardTitle tag="h5">{movie.title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {movie.vote_average}
                </CardSubtitle>
                <CardText>{movie.popularity}</CardText>
                <Button
                  onClick={() => handleButton(movie)}
                  className="align-self-end"
                >
                  add
                </Button>
              </CardBody>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export { CardGroup };
