import React, { FC } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Login: FC = () => {
  return (
    <Form inline>
      <FormGroup>
        <Label for="email" hidden>
          Email
        </Label>
        <Input id="email" name="email" placeholder="Email" type="email" />
      </FormGroup>
      <FormGroup>
        <Label for="password" hidden>
          Password
        </Label>
        <Input
          id="password"
          name="password"
          placeholder="Password"
          type="password"
        />
      </FormGroup>
      <Button type="submit" className="bg-primary text-secondary mt-2">
        LogIn
      </Button>
    </Form>
  );
};

export { Login };
