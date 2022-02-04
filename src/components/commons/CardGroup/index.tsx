/* eslint-disable import/no-unresolved */
import React, { FC } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
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
import { useUsers } from '../../../hooks/useUsers';
import { Data } from '../../../types';
import { Rating } from '../Rating';

type Props = {
  items?: Data[];
  handleButton: (movie: Data) => void;
};

const CardGroup: FC<Props> = ({ items, handleButton }) => {
  const { isOnMyApi } = useData();
  const { currentUser } = useUsers();
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
          <Card className="bg-secondary h-100 justify-content-between">
            <Link
              to={`/detail/${movie.id}`}
              className="text-decoration-none text-primary"
            >
              <CardImg
                alt={`${movie.title || movie.name} movie poster`}
                src={cardImage(movie.poster_path)}
                top
                width="100%"
                className="rounded"
              />
              <CardBody>
                <CardTitle tag="h5">{movie.title || movie.name}</CardTitle>
                <Rating rating={movie.vote_average} />
              </CardBody>
            </Link>
            <CardFooter className="border-top-0 bg-transparent">
              {isOnMyApi(movie.id) && currentUser?.role === 'admin' && (
                <Button
                  onClick={() => handleButton(movie)}
                  className="align-self-end"
                >
                  add
                </Button>
              )}
              {!isOnMyApi(movie.id) && currentUser?.role === 'admin' && (
                <Button
                  onClick={() => handleButton(movie)}
                  className="align-self-end"
                >
                  remove
                </Button>
              )}
              {isOnMyApi(movie.id) && currentUser?.role !== 'admin' && (
                <Button
                  onClick={() => handleButton(movie)}
                  className="align-self-end"
                >
                  <AiOutlineEyeInvisible />
                </Button>
              )}
              {!isOnMyApi(movie.id) && currentUser?.role !== 'admin' && (
                <Button
                  onClick={() => handleButton(movie)}
                  className="align-self-end"
                >
                  <AiOutlineEye />
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
