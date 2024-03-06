import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ColorModeContext, useMode } from './theme';
import { ThemeProvider } from '@mui/system';
import { CssBaseline } from '@mui/material';
import { CSpinner } from '@coreui/react';

// Containers
const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

const Loader = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <CSpinner variant="grow" />
    </div>
  );
};

const App = () => {
  const { theme, colorMode } = useMode();

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
              <Route path="/*" element={<DefaultLayout />} />
            </Routes>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
