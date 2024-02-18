import { Box } from '@mui/material';
import { AppContent, NavBar } from '../components/index';

// ! TEMPORARY IMPORT
import { useGetClusterInfoQuery } from '../services/api';

const DefaultLayout = () => {
  // ! TEMPORARY
  useGetClusterInfoQuery(undefined, { pollingInterval: 25000 });

  return (
    <div className="main-wrapper">
      <NavBar />
      <Box
        component="main"
        sx={{
          marginTop: '4rem',
          height: '100%',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        <AppContent />
      </Box>
    </div>
  );
};

export default DefaultLayout;
