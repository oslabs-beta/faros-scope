import { Link } from 'react-router-dom';
import '../../css/Navbar.scss';
import { SwitchButton } from '../SwitchButton/index';
import { useContext } from 'react';
import { ColorModeContext } from '../../theme';
import { useTheme } from '@mui/material';

interface NavBarProps {
  styleOverride?: any;
}

/**
 * The NavBar component is contstantly rendered at the top of the page. It contains a link to the Faros GitHub repo, and other links to different pages of the app. It also contains a toggle switch to change the theme of the app.
 * @returns ReactNode
 */
export const NavBar = ({ styleOverride }: NavBarProps) => {
  const colorMode = useContext(ColorModeContext);
  const muiTheme = useTheme();
  // const { scrollToSignificantChild } = useGrid();

  const changeTheme = () => {
    colorMode.toggleColorMode();
    // toggleTheme();
  };

  // const centerGrid = () => {
  //   scrollToSignificantChild();
  // };

  return (
    <div
      style={styleOverride}
      className={`navContainer ${'horizontal'} ${muiTheme.palette.mode}`}
    >
      <nav className={`NavBar ${'horizontal'}`}>
        <a
          id="App-Name-Header"
          className={'navLink'}
          href="https://github.com/oslabs-beta/faros-scope"
        >
          Faros
        </a>
        <div className={'nav-right'}>
          <Link to={'/'} className={'navLink'}>
            Home
          </Link>
          <Link to={'/list-view'} className={'navLink'}>
            List View
          </Link>
          <Link to={'/node-view'} className={'navLink'}>
            Node View
          </Link>
          <Link to={'/landing'} className={'navLink'}>
            About
          </Link>
          <Link
            to={'https://github.com/oslabs-beta/faros-scope'}
            className={'navLink'}
          >
            Github Repository
          </Link>
        </div>
        <SwitchButton onChange={changeTheme} />
      </nav>
    </div>
  );
};
