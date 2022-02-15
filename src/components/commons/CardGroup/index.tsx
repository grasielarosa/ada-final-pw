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
};

const CardGroup: FC<Props> = ({ items }) => {
  const { isOnMyApi, handleButtonData } = useData();
  const { currentUser, isOnMyApiUser, handleButton } = useUsers();
  const cardImage = (image: string | null) =>
    !image ? defaultImage : `http://image.tmdb.org/t/p/w500/${image}`;

  return (
    <Row
      sm="2"
      md="3"
      lg="4"
      xxl="5"
      className="
    g-3
    align-items-stretch
    rounded"
    >
      {items?.map((item) => (
        <Col key={item.id}>
          <Card className="bg-secondary h-100 justify-content-between">
            <Link
              to={`/detail/${item.id}`}
              className="text-decoration-none text-primary"
            >
              <CardImg
                alt={`${item.title || item.name} movie poster`}
                src={cardImage(item.poster_path)}
                top
                width="100%"
                className="rounded"
              />
              <CardBody>
                <CardTitle tag="h5">{item.title || item.name}</CardTitle>
                <Rating rating={item.vote_average} />
              </CardBody>
            </Link>
            <CardFooter className="border-top-0 bg-transparent d-grid">
              {!isOnMyApi(item.id) && currentUser?.role === 'admin' && (
                <Button
                  onClick={() => handleButtonData(item)}
                  className="align-text-center bg-primary text-secondary"
                >
                  add
                </Button>
              )}
              {isOnMyApi(item.id) && currentUser?.role === 'admin' && (
                <Button
                  onClick={() => handleButtonData(item)}
                  className="align-text-center bg-primary text-secondary"
                >
                  remove
                </Button>
              )}
              {!isOnMyApiUser(item.id) && currentUser?.role !== 'admin' && (
                <Button
                  onClick={() => handleButton(item)}
                  className="align-text-center fs-3 bg-primary text-secondary"
                >
                  <AiOutlineEyeInvisible />
                </Button>
              )}
              {isOnMyApiUser(item.id) && currentUser?.role !== 'admin' && (
                <Button
                  onClick={() => handleButton(item)}
                  className="align-text-center fs-3 bg-primary text-secondary"
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
