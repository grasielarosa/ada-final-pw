import React, { FC } from 'react';
import { Form, Input, FormGroup, Label } from 'reactstrap';
import { CardGroup, Wrapper } from '../../components';
import { withAuth } from '../../hoc';

const AdminPage: FC = () => {
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

export const Admin = withAuth(AdminPage);
