import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTheme } from './components/context/Theme';
import { Home } from './components/Home/index';
import { Settings } from './components/Settings/index';
import { Landing } from './components/LandingPage/index';
import Main from './Main';

const App = () => {
  const { theme } = useTheme();
  const body = document.querySelector('body');

  //* This useEffect hook is used to toggle the theme class on the body element, which is used to style the app's body itself.
  useEffect(() => {
    if (body) {
      body.classList.toggle('dark', theme === 'dark');
      body.classList.toggle('light', theme === 'light');
    }
  }, [theme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
