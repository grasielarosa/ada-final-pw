import React, { FC, FormEvent, useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useAuth } from '../../../hooks';

const defaultValues = {
  email: '',
  password: '',
};

const Login: FC = () => {
  const [inputs, setInputs] = useState(defaultValues);
  const { login } = useAuth();

  const handleSubmit = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault();

    try {
      await login(inputs.email, inputs.password);
    } catch (err) {
      // setAlert(e.message);
    }
  };

  return (
    <Form inline onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="email" hidden>
          Email
        </Label>
        <Input
          id="email"
          name="email"
          placeholder="Email"
          type="email"
          value={inputs.email}
          onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        />
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
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
      </FormGroup>
      <Button type="submit" className="bg-primary text-secondary mt-2">
        LogIn
      </Button>
    </Form>
  );
};

export { Login };
