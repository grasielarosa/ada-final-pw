import React, { FC, useEffect, useState } from 'react';
import { Form, Input, FormGroup, Label } from 'reactstrap';
import { getDataMedia } from '../../api/myApi';
import { CardGroup, Wrapper } from '../../components';
import { withAuth } from '../../hoc';
import { Data } from '../../types';
import {
  deleteDataMedia,
  getDataMovies,
  getSearchMulti,
  postDataMedia,
} from './api';

const AdminPage: FC = () => {
  const [data, setData] = useState<Data[]>();

  useEffect(() => {
    getDataMovies().then((response) => {
      setData(response);
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    getSearchMulti(e.target.value).then((response) => {
      setData(response);
    });
  };

  const [dataIds, setDataIds] = useState<(number | undefined)[]>();

  useEffect(() => {
    if (data) {
      getDataMedia().then((response) => {
        setDataIds(response.map((item) => item.id));
        console.log(dataIds);
      });
    }
  }, [dataIds]);

  const handleButton = (movie: Data) => {
    if (!dataIds?.includes(movie.id)) {
      postDataMedia(movie);
      console.log('adicionou');
    }
    if (dataIds?.includes(movie.id)) {
      deleteDataMedia(movie);
      console.log('apagou');
    }
  };

  return (
    <Wrapper hideFooter>
      <Form action="">
        <FormGroup floating>
          <Input
            id="search"
            name="search"
            placeholder="search"
            type="search"
            className="rounded-pill mt-3"
            onChange={handleChange}
          />
          <Label for="search" className="ps-4">
            search
          </Label>
        </FormGroup>
      </Form>
      <CardGroup items={data} handleButton={handleButton} />
    </Wrapper>
  );
};

export const Admin = withAuth(AdminPage);
