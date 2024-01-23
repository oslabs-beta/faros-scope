import { useEffect } from 'react';
import { ColorModeContext, useMode } from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useCustomTheme } from './hooks';
import { HomePage } from './pages';
import { SettingsPage } from './pages';
import { LandingPage } from './pages';
import { MainPage } from './pages';
import { GraphPage } from './pages/GraphPage/GraphPage';
import { MarcoThemeProvider } from './context';

const App = () => {
  const [theme, colorMode] = useMode();
  const { theme: customTheme } = useCustomTheme();
  const body = document.querySelector('body');

  //* This useEffect hook is used to toggle the theme class on the body element, which is used to style the app's body itself.
  useEffect(() => {
    if (body) {
      body.classList.toggle('dark', customTheme === 'dark');
      body.classList.toggle('light', customTheme === 'light');
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
                {/* <Route path="list-view" element={<ListViewDisplay />} /> */}
                {/* <Route path="/node-view" element={<NodeView />} /> */}
                <Route path="settings" element={<SettingsPage />} />
                <Route path="graph-view" element={<GraphPage />} />
              </Route>
              <Route path="/landing" element={<LandingPage />} />
            </Routes>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </MarcoThemeProvider>
    </BrowserRouter>
  );
};

export default App;
