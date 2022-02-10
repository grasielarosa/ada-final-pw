/* eslint-disable react/no-this-in-sfc */
import React, { FC, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavLink,
  NavbarToggler,
  NavItem,
} from 'reactstrap';
import { AuthContext } from '../../../context/Auth';

import { useAuth } from '../../../hooks';

const Header: FC = () => {
  const { currentUser } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const { logout } = useAuth();

  return (
    <header className="align-self-start">
      <Navbar expand="md" className="mx-4">
        <NavbarBrand className="text-secondary">CinemAda</NavbarBrand>
        <NavbarToggler className="me-2" onClick={toggle} />
        <Collapse className="flex-row-reverse" isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="text-secondary" href="/">
                home
              </NavLink>
            </NavItem>
            <NavItem>
              <Link className="text-secondary" to="/movies">
                movies
              </Link>
            </NavItem>
            <NavItem>
              <NavLink className="text-secondary" href="/series">
                series
              </NavLink>
            </NavItem>
            {currentUser?.role === 'admin' && (
              <NavItem>
                <NavLink className="text-secondary" href="/users">
                  users
                </NavLink>
              </NavItem>
            )}
            {currentUser?.role === 'admin' && (
              <NavItem>
                <NavLink className="text-secondary" href="/admin">
                  admin
                </NavLink>
              </NavItem>
            )}
            <NavItem>
              <NavLink className="text-secondary" href="#" onClick={logout}>
                logout
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

export { Header };
