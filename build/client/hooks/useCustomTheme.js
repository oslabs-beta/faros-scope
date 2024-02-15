"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCustomTheme = void 0;
const react_1 = require("react");
const context_1 = require("../context");
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
const useCustomTheme = () => {
    return (0, react_1.useContext)(context_1.ThemeContext);
};
exports.useCustomTheme = useCustomTheme;
