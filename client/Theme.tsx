import React, { useState, createContext, useContext, ReactNode } from 'react';
import { ThemeContextType } from '../types/types';

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
});

const Theme = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  localStorage.setItem('theme', theme);

  const toggleTheme = () => {
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

export default Theme;
