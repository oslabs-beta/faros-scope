import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ColorModeContext, useMode } from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { HomePage } from './pages';
import { SettingsPage } from './pages';
import { LandingPage } from './pages';
import { MainPage } from './pages';
import { NodeView } from './pages';
import { ListViewDisplay } from './components';
import { MarcoThemeProvider } from './context';
import { GraphPage } from './pages/GraphPage/GraphPage';
import { useCustomTheme } from './hooks';

const App = () => {
  const [theme, colorMode] = useMode();
    const { theme: customTheme } = useCustomTheme();
    const body = document.querySelector('body');

  //* This useEffect hook is used to toggle the theme class on the body element, which is used to style the app's body itself.
  useEffect(() => {
    if (body) {
      if (customTheme === 'dark') {
        body.classList.add('dark');
        body.classList.remove('light');
      } else if (customTheme === 'light') {
        body.classList.add('light');
        body.classList.remove('dark');
      }
    }
  }, [customTheme]);

  return (
    <BrowserRouter>
      <MarcoThemeProvider>
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
      </MarcoThemeProvider>
    </BrowserRouter>
  );
};

export default App;
