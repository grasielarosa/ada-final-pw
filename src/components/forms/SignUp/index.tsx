import React, { FC, FormEvent, useState } from 'react';
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';
import { signup } from './api';

const defaultValues = {
  name: '',
  email: '',
  password: '',
  birthdate: '',
  role: 'user',
  sessionToken: '',
};

const SignUp: FC = () => {
  const [inputs, setInputs] = useState(defaultValues);

  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    signup({ ...inputs, birthdate: new Date(inputs.birthdate) });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="name">Nombre y apellido:</Label>
        <Input
          id="name"
          type="text"
          name="name"
          value={inputs.name}
          onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">E-mail:</Label>
        <Input
          id="email"
          type="text"
          name="email"
          value={inputs.email}
          onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Contraseña</Label>
        <Input
          id="password"
          type="password"
          name="password"
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="birthdate">Fecha de nacimiento:</Label>
        <Input
          id="birthdate"
          type="date"
          name="birthdate"
          value={inputs.birthdate}
          onChange={(e) => setInputs({ ...inputs, birthdate: e.target.value })}
        />
      </FormGroup>
      <Button className="bg-primary text-secondary mt-2" type="submit">
        Create new user
      </Button>
    </Form>
  );
};

export { SignUp };
