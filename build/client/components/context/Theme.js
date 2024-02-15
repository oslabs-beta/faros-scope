"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTheme = exports.ThemeContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
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
exports.ThemeContext = (0, react_1.createContext)({
    theme: 'dark',
    toggleTheme: () => { },
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
const Theme = ({ children }) => {
    const [theme, setTheme] = (0, react_1.useState)(localStorage.getItem('theme') || 'dark');
    localStorage.setItem('theme', theme);
    const toggleTheme = () => {
        console.log('toggle theme');
        localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    return ((0, jsx_runtime_1.jsx)(exports.ThemeContext.Provider, { value: { theme, toggleTheme }, children: children }));
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
const useTheme = () => {
    return (0, react_1.useContext)(exports.ThemeContext);
};
exports.useTheme = useTheme;
exports.default = Theme;
