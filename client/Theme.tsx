import React, { useState, createContext, useContext, ReactNode } from 'react';
import { ThemeContextType } from '../types/types';


/**
 * A context that provides the current theme and a function to toggle it
 * @example - Usage:
 * import { ThemeContext } from './Theme';
 * const component = () => {
 *  const { theme, toggleTheme } = useContext(ThemeContext);
 *  return (
 *    <div className={theme}>
 *      <button onClick={toggleTheme}>Toggle Theme</button>
 *    </div>
 *  );
 * };
*/
export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
});

/**
 * A wrapper component that provides the current theme and a function to toggle it
 * @param children
 * @returns ReactNode
 * @example - Usage:
 * import Theme from './Theme';
 * const component = () => {
 * return (
 *  <Theme>
 *    <App />
 *   </Theme>
 *  );
 * };
*/
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

/**
 * A custom hook that returns the current theme and a function to toggle it
 * @returns ThemeContextType
 * @example - Usage:
 * import { useTheme } from './Theme';
 * const component = () => {
 *  const { theme, toggleTheme } = useTheme();
 *  return (
 *    <div className={theme}>
 *      <button onClick={toggleTheme}>Toggle Theme</button>
 *    </div>
 *  );
 * };
*/
export const useTheme = () => {
  return useContext(ThemeContext);
};

export default Theme;
