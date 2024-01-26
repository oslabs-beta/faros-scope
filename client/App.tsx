import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ColorModeContext, useMode } from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { HomePage } from './pages';
import { LandingPage, SettingsPage, NodeView, MainPage } from './pages';
import { ListViewDisplay } from './components';
import { GraphPage } from './pages/GraphPage/GraphPage';
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
            <Route path="/node-view" element={<NodeView />} />
            <Route path="/workload-view" element={<WorkloadView />} />
            <Route path="graph-view" element={<GraphPage />} />
          </Route>
          <Route path="landing" element={<LandingPage />} />
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
