import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { SwitchButton } from '../SwitchButton';
import { useTheme } from '@mui/material';
import { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ColorModeContext } from '../../theme';
import NavBarLink from './NavBarLink';
import logo from '../../assets/faros.png';
import './navbar.scss';

export const NavBar = () => {
  const colorMode = useContext(ColorModeContext);
  const changeTheme = () => colorMode.toggleColorMode();
  const [sidebarShow, setSidebarShow] = useState(false);
  const location = useLocation();
  const currLocation = location.pathname;
  const theme = useTheme();

  const toggleSidebar = () => {
    console.log('toggleSidebar');
    setSidebarShow(!sidebarShow);
  };

  return (
    <>
      <AppBar id="navbar" position="fixed">
        <Toolbar
          id="toolbar"
          sx={{
            backgroundColor: 'transparent',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              marginLeft: '0.5rem',
              '&:hover': {
                backgroundColor: '#20232A',
              },
            }}
            onClick={toggleSidebar}
          >
            <MenuIcon />
          </IconButton>
          <Box display={'flex'} gap={2}>
            <img height={'50px'} src={logo} alt="logo" />
            <Typography variant="h1">Faros-Scope</Typography>
          </Box>
          <SwitchButton onChange={changeTheme} />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        anchor="left"
        open={sidebarShow}
        onClose={toggleSidebar}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          '& .MuiPaper-root': {
            background: 'transparent',
          },
          '& .MuiDrawer-paper': {
            minWidth: '15%',
            backgroundColor:
              theme.palette.mode === 'light' ? '#FFFFFF' : '#20232A',
          },
        }}
      >
        <IconButton
          size="large"
          edge={false}
          aria-label="menu"
          sx={{
            color: theme.palette.mode === 'light' ? '#000000' : '#FFFFFF',
            width: '100%',
            borderRadius: '0%',
            backgroundColor:
              theme.palette.mode === 'light' ? '#d6d4d4' : '#181a1f',
            '&:hover': {
              backgroundColor:
                theme.palette.mode === 'light' ? '#FFFFFF' : '#20232A',
            },
          }}
          onClick={toggleSidebar}
        >
          <MenuIcon />
        </IconButton>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
            borderTop: `1px solid ${
              theme.palette.mode === 'light'
                ? '#000000'
                : 'rgba(248, 249, 250, 0.5)'
            }`,
            borderBottom: `1px solid ${
              theme.palette.mode === 'light'
                ? '#000000'
                : 'rgba(248, 249, 250, 0.5)'
            }`,
            backgroundColor:
              theme.palette.mode === 'light' ? '#d6d4d4' : '#181a1f',
          }}
        >
          <Container
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '0.5rem',
            }}
          >
            <img 
              height={'75px'} 
              src={logo} 
              alt="logo"
              style={{
                filter: 'drop-shadow(0 0 0.5em #61dafbaa)'
              }}
            />
          </Container>
          <NavBarLink
            to="/dashboard"
            currLocation={currLocation}
            toggleSidebar={toggleSidebar}
          >
            Dashboard
          </NavBarLink>
          <NavBarLink
            to="/list-view"
            currLocation={currLocation}
            toggleSidebar={toggleSidebar}
          >
            List-View
          </NavBarLink>
          <NavBarLink
            to="/node-view"
            currLocation={currLocation}
            toggleSidebar={toggleSidebar}
          >
            Node-View
          </NavBarLink>
        </Box>
      </Drawer>
    </>
  );
};
