import { Link } from 'react-router-dom';
import homeImage from '../../assets/icons8-home-512.png';
import settingsImage from '../../assets/icons8-settings-512.png';
import listImage from '../../assets/list.png';
import '../../css/Navbar.scss';
import { SwitchButton } from '../SwitchButton/index';
import { useContext } from 'react';
import { ColorModeContext } from '../../theme';
import { useTheme } from '@mui/material';

interface NavBarProps {
  styleOverride?: any;
  orientation?: string;
}

/**
 * The NavBar component is contstantly rendered at the top of the page. It contains a link to the Faros GitHub repo, and other links to different pages of the app. It also contains a toggle switch to change the theme of the app.
 * @returns ReactNode
 */
export const NavBar = ({ styleOverride, orientation }: NavBarProps) => {
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
      className={`navContainer ${
        orientation === 'vertical' ? 'vertical' : 'horizontal'
      } ${muiTheme.palette.mode}`}
    >
      <nav
        className={`NavBar ${
          orientation === 'horizontal' ? 'horizontal' : 'vertical'
        }`}
      >
        <a
          id="App-Name-Header"
          className={'navLink'}
          href="https://github.com/oslabs-beta/faros-scope"
        >
          {orientation === 'vertical' ? 'FA' : 'Faros'}
        </a>
        <div className={'nav-right'}>
          <Link to={'/'} className={'navLink'}>
            {orientation === 'vertical' ? (
              <img
                style={{ maxWidth: '35px', maxHeight: '35px' }}
                src={homeImage}
              ></img>
            ) : (
              'Home'
            )}
          </Link>
          {/* <Link to={'/settings'} className={'navLink'}>
            {orientation === 'vertical' ? (
              <img
                style={{ maxWidth: '35px', maxHeight: '35px' }}
                src={settingsImage}
              ></img>
            ) : (
              'Settings'
            )}
          </Link> */}
          <Link to={'/list-view'} className={'navLink'}>
            {orientation === 'vertical' ? (
              <img
                style={{ maxWidth: '35px', maxHeight: '35px' }}
                src={listImage}
              ></img>
            ) : (
              'List View'
            )}
          </Link>
          <Link to={'/node-view'} className={'navLink'}>
            {orientation === 'vertical' ? (
              <img
                style={{ maxWidth: '35px', maxHeight: '35px' }}
                src={listImage}
              ></img>
            ) : (
              'Node View'
            )}
          </Link>
          {/* DOESN'T WORK ON CHROME FOR SOME REASON, DEPRECATED FOR NOW  */}
          {/* <button className={'navLink btn'} onClick={centerGrid}>
            {orientation === 'vertical' ? (
              <img
                style={{ maxWidth: '35px', maxHeight: '35px' }}
                src={centerImage}
              ></img>
            ) : (
              'Center Grid'
            )}
          </button> */}
        </div>
        <SwitchButton onChange={changeTheme} />
      </nav>
    </div>
  );
};
