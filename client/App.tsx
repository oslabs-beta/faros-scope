import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTheme } from './Theme';
import Main from './Main';
import Home from './components/Home';
import Settings from './components/Settings';

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
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
