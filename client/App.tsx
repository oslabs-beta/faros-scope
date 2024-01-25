import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ColorModeContext, useMode } from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { HomePage } from './pages';
import { SettingsPage } from './pages';
import { LandingPage } from './pages';
import { MainPage } from './pages';
import { NodeView } from './pages';
import { ListViewDisplay } from './components';
import { GraphPage } from './pages/GraphPage/GraphPage';

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <BrowserRouter>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<MainPage />}>
              <Route index element={<HomePage />} />
              <Route path="list-view" element={<ListViewDisplay />} />
              <Route path="node-view" element={<NodeView />} />
              <Route path="settings" element={<SettingsPage />} />
              <Route path="graph-view" element={<GraphPage />} />
            </Route>
            <Route path="landing" element={<LandingPage />} />
          </Routes>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>
  );
};

export default App;
