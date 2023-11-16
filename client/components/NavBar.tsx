import React from 'react';
import '../css/navbar.scss';
import { useTheme } from '../Theme';

const NavBar = () => {
  const { toggleTheme, theme } = useTheme();
  const changeTheme = () => {
    toggleTheme();
  };

  return (
    <nav className="NavBar">
      <h1 id='App-Name-Header'>Faros</h1>
      <button
        className={`switch ${theme}`}
        id="Theme-Button"
        onClick={changeTheme}
      >
        Theme
      </button>
    </nav>
  );
};

export default NavBar;
