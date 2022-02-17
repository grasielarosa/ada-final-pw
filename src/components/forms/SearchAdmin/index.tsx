import React, { FC } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';

type Props = {
  handleChange: (searchInput: string) => void;
};

const SearchForm: FC<Props> = ({ handleChange }) => {
  return (
    <Form action="">
      <FormGroup floating>
        <Input
          id="search"
          name="search"
          placeholder="search"
          type="search"
          className="rounded-pill mt-3 ps-5"
          onChange={(e) => handleChange(e.target.value)}
        />
        <Label for="search" className="ps-4">
          search
        </Label>
      </FormGroup>
    </Form>
  );
};

export { SearchForm };
