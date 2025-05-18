import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavbarProps {
  modules: {
    name: string;
    routeProps: {
      path: string;
    };
  }[];
}

const Navbar: React.FC<NavbarProps> = ({ modules }) => {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      {modules.map((module) => (
        <NavLink
          key={module.routeProps.path}
          to={module.routeProps.path}
          style={{ marginRight: '1rem', textDecoration: 'none', color: 'blue' }}
          activeStyle={{ fontWeight: 'bold', color: 'darkblue' }}
        >
          {module.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
