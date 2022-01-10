import React, { FC } from 'react';
import { Form, Input, FormGroup, Label } from 'reactstrap';
import { CardGroup, Wrapper } from '../../components';

const Admin: FC = () => {
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
          />
          <Label for="searchl" className="ps-4">
            search
          </Label>
        </FormGroup>
      </Form>
      <CardGroup />
    </Wrapper>
  );
};

export { Admin };
