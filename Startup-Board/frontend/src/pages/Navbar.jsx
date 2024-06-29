import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <ul>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/login">Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/signup">Sign Up</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/blog">Blog</NavLink>
        </NavItem>
      </ul>
    </Nav>
  );
};

const Nav = styled.nav`
  background: #007bff;
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: flex-end; /* Align links to the right */
  }
`;

const NavItem = styled.li`
  margin-right: 20px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 10px 15px;
  border-radius: 5px;
  &:hover {
    background: #0056b3;
  }
`;

export default Navbar;
