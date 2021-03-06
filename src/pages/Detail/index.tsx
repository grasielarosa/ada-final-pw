/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-expressions */
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
import { RiArrowGoBackLine } from 'react-icons/ri';
import { Wrapper } from '../../components';
import { withAuth } from '../../hoc';
import { Data, Movies } from '../../types';
import { getDataMediaDetail, getSeries, getVideos } from './api';
import defaultImage from '../../assets/images/image-not-found.jpeg';
import { Rating } from '../../components/commons/Rating';

type ParamsType = {
  id: string;
};

const DetailPage: FC = () => {
  const [data, setData] = useState<Data[]>();
  const [mediaType, setMediaType] = useState<boolean>();
  const [videos, setVideos] = useState<Movies[]>();

  const { id } = useParams<ParamsType>();

  const { goBack } = useHistory();

  useEffect(() => {
    getDataMediaDetail().then((response) => {
      const map = response.filter((item) => item.id === Number(id));
      const detail = response.find((item) => item.id === Number(id));
      const type = detail.media_type === 'tv';
      console.log('d', detail, 't', type);
      setData(map);
      setMediaType(type);
    });
  }, []);

  useEffect(() => {
    mediaType
      ? getVideos(Number(id)).then((response) => {
        setVideos(response);
      })
      : getSeries(Number(id)).then((response) => {
        setVideos(response);
      });
  }, []);

  const cardImage = (image: string | null) =>
    !image ? defaultImage : `http://image.tmdb.org/t/p/w500/${image}`;

  return (
    <Wrapper>
      <Col lg="11" className="mx-auto">
        <div className="d-grid">
          <Button onClick={goBack} className="btn-outline-primary my-3">
            <RiArrowGoBackLine />
          </Button>
        </div>
        {data?.map((item) => (
          <Card key={item.id} className="bg-secondary text-primary p-4">
            <Row>
              <Col>
                <CardImg
                  alt={`${item.title || item.name} movie poster`}
                  src={cardImage(item.poster_path)}
                  width="100%"
                />
              </Col>
              <Col className="d-flex">
                <CardBody>
                  <CardTitle tag="h5">{item.title || item.name}</CardTitle>
                  <div className="flex-column justify-content-around">
                    <CardText>
                      <small className="text-muted">
                        Release date: {item.release_date}
                      </small>
                      <br />
                      <Rating rating={item.vote_average} />
                    </CardText>
                    <CardText>{item.overview}</CardText>

                    <div className="my-3">
                      {videos?.map((video) => (
                        <div className="embed-responsive">
                          <iframe
                            className="embed-responsive-item"
                            width="100%"
                            src={`https://www.youtube.com/embed/${video.key}`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardBody>
              </Col>
            </Row>
          </Card>
        ))}
      </Col>
    </Wrapper>
  );
};

export const Detail = withAuth(DetailPage);
