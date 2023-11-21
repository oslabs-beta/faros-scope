import React from 'react';
import '../css/navbar.scss';
import { useTheme } from '../Theme';
import SwitchButton from './reusable/SwitchButton';
import { Link } from 'react-router-dom';
import Draggable from './reusable/reactdnd/Draggable';

interface NavBarProps {
  styleOverride?: any;
  orientation?: string;
}

/**
 * The NavBar component is contstantly rendered at the top of the page. It contains a link to the Faros GitHub repo, and other links to different pages of the app. It also contains a toggle switch to change the theme of the app.
 * @returns ReactNode
 */
const NavBar = ({ styleOverride, orientation }: NavBarProps) => {
  const { toggleTheme, theme } = useTheme();
  const changeTheme = () => {
    toggleTheme();
  };

  return (
    <div
      style={styleOverride}
      className={`navContainer ${
        orientation === 'vertical' ? 'vertical' : 'horizontal'
      }`}
    >
      <Draggable
        className={`navDragContainer ${orientation || ''}`}
        id="navDragContainer"
        orientation={orientation || ''}
      >
        <div className="navDragButton">
          <img id="navDragImg" src="../../assets/move-svgrepo-com.svg"></img>
        </div>
      </Draggable>
      <nav
        className={`NavBar ${
          orientation === 'horizontal' ? 'horizontal' : 'vertical'
        }`}
      >
        <a
          id="App-Name-Header"
          className="navLink"
          href="https://github.com/oslabs-beta/faros-scope"
        >
          {orientation === 'vertical' ? 'FA' : 'Faros'}
        </a>
        <div className="nav-right">
          <Link to={'/'} className="navLink">
            {orientation === 'vertical' ? (
              <img
                style={{ maxWidth: '35px', maxHeight: '35px' }}
                src="../../assets/icons8-home-512.png"
              ></img>
            ) : (
              'Home'
            )}
          </Link>
          <Link to={'/settings'} className="navLink">
            {orientation === 'vertical' ? (
              <img
                style={{ maxWidth: '35px', maxHeight: '35px' }}
                src="../../assets/icons8-settings-512.png"
              ></img>
            ) : (
              'Settings'
            )}
          </Link>
          <SwitchButton checked={theme === 'dark'} onChange={changeTheme} />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
