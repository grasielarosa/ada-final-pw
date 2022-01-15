import React, { FC, useEffect, useState } from 'react';
import { Form, Input, FormGroup, Label } from 'reactstrap';
import { CardGroup, Wrapper } from '../../components';
import { withAuth } from '../../hoc';
import { Data } from '../../types';
import { getDataMovies, getSearchMulti, postDataMedia } from './api';

const AdminPage: FC = () => {
  const [data, setData] = useState<Data[]>();
  const [post, setPost] = useState<Data[]>();

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

  const handleButton = (movie: Data) => {
    postDataMedia(movie);
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
      <CardGroup api={data} handleButton={handleButton} />
    </Wrapper>
  );
};

export const Admin = withAuth(AdminPage);
