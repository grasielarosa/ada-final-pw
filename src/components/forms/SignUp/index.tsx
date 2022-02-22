import React, { FC, FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { useAuth } from '../../../hooks';

const defaultValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  birthdate: '',
  role: 'user',
  sessionToken: '',
};

const SignUp: FC = () => {
  const [inputs, setInputs] = useState(defaultValues);
  const { push } = useHistory();
  const { signup } = useAuth();

  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    signup({ ...inputs, birthdate: new Date(inputs.birthdate) });
    push('/login');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup className="d-flex flex-row justify-content-between">
        <div>
          <Label htmlFor="name">first name:</Label>
          <Input
            id="name"
            type="text"
            name="name"
            value={inputs.firstname}
            onChange={(e) =>
              setInputs({ ...inputs, firstname: e.target.value })
            }
          />
        </div>
        <div>
          <Label htmlFor="name">last name:</Label>
          <Input
            id="name"
            type="text"
            name="name"
            value={inputs.lastname}
            onChange={(e) => setInputs({ ...inputs, lastname: e.target.value })}
          />
        </div>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">e-mail:</Label>
        <Input
          id="email"
          type="text"
          name="email"
          value={inputs.email}
          onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">password</Label>
        <Input
          id="password"
          type="password"
          name="password"
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="birthdate">birthdate</Label>
        <Input
          id="birthdate"
          type="date"
          name="birthdate"
          value={inputs.birthdate}
          onChange={(e) => setInputs({ ...inputs, birthdate: e.target.value })}
        />
      </FormGroup>
      <div>
        <Button className="bg-primary text-secondary mt-2" type="submit">
          create new user
        </Button>
        <span className="mx-2 align-bottom fw-light">
          Already have an account?
          <Link
            to="/login"
            className=" fw-bold text-primary text-decoration-none"
          >
            {' '}
            Go to login!
          </Link>
        </span>
      </div>
    </Form>
  );
};

export { SignUp };
