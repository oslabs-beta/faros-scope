import { useEffect, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../../components/NavBar/index';
import { GridProvider } from '../../context';
import {
  useGetClusterInfoQuery,
  useGetClusterMetricsMapQuery,
} from '../../services/api';
import { useSocket } from '../../services/bobbySocketService';
import { useTheme } from '@mui/material';
import { ColorModeContext } from '../../theme';

export const MainPage = () => {
  const muiTheme = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);

  useSocket('http://34.139.156.110:80/');
  // ^ see if this works w/o variable declarations
  // useGetClusterInfoQuery(undefined, { pollingInterval: 25000 });
  // useGetClusterMetricsMapQuery(undefined, { pollingInterval: 5000 });

  // Outlet is a special component that is used to render nested routes, default is the index route, which is the home page.
  useEffect(() => {
    const storedMode = localStorage.getItem('theme');
    if (muiTheme.palette.mode !== storedMode) {
      toggleColorMode();
    }
  }, []);

  const body = document.querySelector('body');
  //* This useEffect hook is used to toggle the theme class on the body element, which is used to style the app's body itself.
  useEffect(() => {
    if (body) {
      if (muiTheme.palette.mode === 'dark') {
        body.classList.add('dark');
        body.classList.remove('light');
      } else if (muiTheme.palette.mode === 'light') {
        body.classList.add('light');
        body.classList.remove('dark');
      }
    }
    localStorage.setItem('theme', muiTheme.palette.mode);
  }, [muiTheme.palette.mode]);

  return (
    <div className="Main">
      <GridProvider>
        <NavBar />
        <Outlet />
      </GridProvider>
    </div>
  );
};
