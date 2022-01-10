/* eslint-disable react/no-this-in-sfc */
import React, { useState } from 'react';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavLink,
  NavbarToggler,
  NavItem,
} from 'reactstrap';

import { useAuth } from '../../../hooks';

const Header = () => {
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
              <NavLink className="text-secondary" href="/movies">
                movies
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-secondary" href="/series">
                series
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-secondary" href="/users">
                users
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-secondary" href="/admin">
                admin
              </NavLink>
            </NavItem>
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
