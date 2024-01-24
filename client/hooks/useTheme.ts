import { useContext } from 'react';
import { ThemeContext } from '../context';

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