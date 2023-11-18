import React from 'react';
import '../css/navbar.scss';
import { useTheme } from '../Theme';
import SwitchButton from './reusable/SwitchButton';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { toggleTheme, theme } = useTheme();
  const changeTheme = () => {
    toggleTheme();
  };

  return (
    <nav className="NavBar">
      <a
        id="App-Name-Header"
        className="navLink"
        href="https://github.com/oslabs-beta/faros-scope"
      >
        Faros
      </a>
      <div className="nav-right">
        <Link to={'/'} className="navLink">
          Home
        </Link>
        <Link to={'/settings'} className="navLink">
          Settings
        </Link>
        <SwitchButton checked={theme === 'dark'} onChange={changeTheme} />
      </div>
    </nav>
  );
};

export default NavBar;
