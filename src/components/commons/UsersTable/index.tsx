/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { AiOutlineUserDelete } from 'react-icons/ai';
import { Button, Table } from 'reactstrap';
import moment from 'moment';
import { deleteUser, getUsersData } from '../../../pages/Users/api';
import { User } from '../../../types';

const UsersTable = () => {
  const [users, setUsers] = useState<User[] | undefined>();
  const getUsers = async () => {
    try {
      const response = await getUsersData();
      setUsers(response);
    } catch (err) {
      throw new Error();
    }
  };
  const removeUser = async (id: string) => {
    await deleteUser(id);
    getUsers();
  };

  if (!users) {
    getUsers();
  }
  return (
    <Table responsive className="text-secondary border-secondary">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Rol</th>
          <th>E-mail</th>
          <th>Fecha de Nacimiento</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {users?.map((user) => {
          return (
            <tr key={user.id} className="align-middle">
              <th scope="row">{user.firstname}</th>
              <th scope="row">{user.lastname}</th>
              <td>{user.role}</td>
              <td>{user.email}</td>
              <td>{moment(new Date(user.birthdate)).format('DD-MM-YYYY')}</td>
              <td>
                <Button
                  onClick={() => {
                    removeUser(user.id);
                  }}
                  className="btn-outline-primary"
                >
                  <AiOutlineUserDelete />
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export { UsersTable };
