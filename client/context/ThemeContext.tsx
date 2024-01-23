import { useState, createContext, ReactNode } from 'react';
import { ThemeContextType } from '../../types/types';

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
export const MarcoThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  localStorage.setItem('theme', theme);

  const toggleTheme = () => {
    console.log('toggle theme');
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

