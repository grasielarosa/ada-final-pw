/* eslint-disable import/no-unresolved */
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row,
} from 'reactstrap';

import defaultImage from '../../../assets/images/image-not-found.jpeg';
import { useData } from '../../../hooks/useData';
import { Data } from '../../../types';

type Props = {
  items?: Data[];
  handleButton: (movie: Data) => void;
};

const CardGroup: FC<Props> = ({ items, handleButton }) => {
  const { isOnMyApi } = useData();
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
          <Card className="bg-secondary text-primary h-100">
            <Link to={`/detail/${movie.id}`} className="text-decoration-none">
              <CardImg
                alt={`${movie.title || movie.name} movie poster`}
                src={cardImage(movie.poster_path)}
                top
                width="100%"
                className="rounded"
              />
              <CardBody>
                <CardTitle tag="h5">{movie.title || movie.name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {movie.vote_average}
                </CardSubtitle>
                <CardText>{movie.popularity}</CardText>
              </CardBody>
            </Link>
            <CardFooter>
              {isOnMyApi(movie.id) && (
                <Button
                  onClick={() => handleButton(movie)}
                  className="align-self-end"
                >
                  add
                </Button>
              )}
              {!isOnMyApi(movie.id) && (
                <Button
                  onClick={() => handleButton(movie)}
                  className="align-self-end"
                >
                  remove
                </Button>
              )}
            </CardFooter>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export { CardGroup };
