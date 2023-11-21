import React from 'react';
import '../css/navbar.scss';
import { useTheme } from '../Theme';
import SwitchButton from './reusable/SwitchButton';
import { Link } from 'react-router-dom';
import Draggable from './reusable/reactdnd/Draggable';

/**
 * The NavBar component is contstantly rendered at the top of the page. It contains a link to the Faros GitHub repo, and other links to different pages of the app. It also contains a toggle switch to change the theme of the app.
 * @returns ReactNode
 */
const NavBar = ({ styleOverride }: any) => {
  const { toggleTheme, theme } = useTheme();
  const changeTheme = () => {
    toggleTheme();
  };

  return (
    <Draggable id='navbar'>
      <div style={styleOverride} className='navContainer'>
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
      </div>
    </Draggable>
  );
};

export default NavBar;
