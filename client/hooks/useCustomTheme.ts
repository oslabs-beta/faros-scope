import { useContext } from 'react';
import { ThemeContext } from '../context';

/**
 * A custom hook that returns the current theme and a function to toggle it
 * @returns ThemeContextType
 * @example - Usage:
 * import { useCustomTheme } from './Theme';
 * const component = () => {
 *  const { theme, toggleTheme } = useCustomTheme();
 *  return (
 *    <div className={theme}>
 *      <button onClick={toggleTheme}>Toggle Theme</button>
 *    </div>
 *  );
 * };
 */

export const useCustomTheme = () => {
  return useContext(ThemeContext);
};
