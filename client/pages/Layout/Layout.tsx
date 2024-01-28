import React, { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { MockNavbar } from '../../components';
import { MockSidebar } from '../../components';

export const Layout = () => {
  const isNonMobile = useMediaQuery('(min-width: 600px)');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const user = {
        name: "John Doe",
        email: "JohnDoe.gmail.com"
    }

  return (
    <Box display={isNonMobile ? 'flex' : 'block'} width="100%" height="100%">
      {/* <MockSidebar
      user={user}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      /> */}
      <Box>
        {/* <MockNavbar
        user={user}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        /> */}
        <Outlet />
      </Box>
    </Box>
  );
};
