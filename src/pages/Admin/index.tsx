import React, { FC } from 'react';
import { Form, Input, FormGroup, Label } from 'reactstrap';
import { CardGroup, Pagination, Wrapper } from '../../components';
import { withAuth } from '../../hoc';
import { useData } from '../../hooks/useData';

const AdminPage: FC = () => {
  const {
    data,
    handleChange,
    handleButton,
    handlePageClick,
    totalPages,
    dataIds,
  } = useData();

  console.log(dataIds);
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
            teste
          </Label>
        </FormGroup>
      </Form>
      <CardGroup items={data} handleButton={handleButton} />
      <Pagination pageCount={totalPages} handlePageClick={handlePageClick} />
    </Wrapper>
  );
};

export const Admin = withAuth(AdminPage);
