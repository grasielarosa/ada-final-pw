/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-this-in-sfc */
import React, { FC, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
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
    <header className="align-self-start mt-3">
      <Navbar expand="md" className="mx-4">
        <NavbarBrand>
          <Link to="/" className="text-secondary text-decoration-none">
            CinemAda
          </Link>
        </NavbarBrand>
        <NavbarToggler className="me-2" onClick={toggle} />
        <Collapse className="flex-row-reverse" isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link
                className="text-secondary text-decoration-none nav-link"
                to="/"
              >
                home
              </Link>
            </NavItem>
            <NavItem>
              <Link
                className="text-secondary text-decoration-none nav-link"
                to="/movies"
              >
                movies
              </Link>
            </NavItem>
            <NavItem>
              <Link
                className="text-secondary text-decoration-none nav-link"
                to="/series"
              >
                series
              </Link>
            </NavItem>
            {currentUser?.role === 'admin' && (
              <NavItem>
                <Link
                  className="text-secondary text-decoration-none nav-link"
                  to="/users"
                >
                  users
                </Link>
              </NavItem>
            )}
            {currentUser?.role === 'admin' && (
              <NavItem>
                <Link
                  className="text-secondary text-decoration-none nav-link"
                  to="/admin"
                >
                  admin
                </Link>
              </NavItem>
            )}
            <NavItem>
              <Link
                className="text-secondary text-decoration-none nav-link"
                to="#"
                onClick={logout}
              >
                logout
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

export { Header };
