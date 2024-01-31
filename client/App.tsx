import { Routes, Route } from 'react-router-dom';
import { ColorModeContext, useMode } from './theme';
import { ThemeProvider } from '@mui/system';
import { CssBaseline } from '@mui/material';
import { HomePage } from './pages';
import { LandingPage, NodeView, MainPage } from './pages';
import { WorkloadView } from './pages';
import { ListViewPage } from './pages/ListViewPage/ListViewPage';

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route index element={<HomePage />} />
            <Route path="list-view" element={<ListViewPage />} />
            <Route path="node-view" element={<NodeView />} />
            <Route path="workload-view" element={<WorkloadView />} />
          </Route>
          <Route path="landing" element={<LandingPage />} />
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
