import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

// This is the main component that is rendered by the client.
const Main = () => {
  // Outlet is a special component that is used to render nested routes, default is the index route, which is the home page.
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Main;
