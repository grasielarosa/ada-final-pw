import React, { FC, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Row,
  Col,
  Button,
} from 'reactstrap';
import { Wrapper } from '../../components';
import { withAuth } from '../../hoc';
import { Data } from '../../types';
import { getDataMediaDetail } from './api';
import defaultImage from '../../assets/images/image-not-found.jpeg';

type ParamsType = {
  id: string;
};

const DetailPage: FC = () => {
  const [data, setData] = useState<Data[]>();

  const { id } = useParams<ParamsType>();
  const search = Number(id);

  const { goBack } = useHistory();

  useEffect(() => {
    getDataMediaDetail().then((response) => {
      const detail = response.filter((item) => item.id === Number(id));
      setData(detail);
    });
  }, []);

  const cardImage = (image: string | null) =>
    !image ? defaultImage : `http://image.tmdb.org/t/p/w500/${image}`;

  return (
    <Wrapper>
      <Button onClick={goBack}> {'<-'} </Button>
      <br />
      {data?.map((item) => (
        <Card>
          <Row>
            <Col>
              <CardImg
                alt="Card image cap"
                bottom
                src={cardImage(item.poster_path)}
                width="100%"
              />
            </Col>
            <Col>
              <CardBody>
                <CardTitle tag="h5">Card Title</CardTitle>
                <CardText>
                  <p>{item.id}</p>
                  <p>{item.genre_ids}</p>
                  <p>{item.release_date}</p>
                  <p>{item.overview}</p>
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardBody>
            </Col>
          </Row>
        </Card>
      ))}
    </Wrapper>
  );
};

export const Detail = withAuth(DetailPage);
