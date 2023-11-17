import React from 'react';
import '../css/navbar.scss';
import { useTheme } from '../Theme';
import SwitchButton from './reusable/SwitchButton';

const NavBar = () => {
  const { toggleTheme, theme } = useTheme();
  const changeTheme = () => {
    toggleTheme();
  };

  return (
    <nav className="NavBar">
      <h1 id='App-Name-Header'>Faros</h1>
      <div className="nav-right">
        <SwitchButton checked={theme === 'dark'} onChange={changeTheme} />
      </div>
    </nav>
  );
};

export default NavBar;
