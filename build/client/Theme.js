"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMode = exports.ColorModeContext = exports.themeSettings = void 0;
const react_1 = require("react");
const styles_1 = require("@mui/material/styles");
// mui theme settings
const themeSettings = (mode) => {
    // const colors = tokens(mode);
    return {
        palette: Object.assign({ mode: mode }, (mode === "dark"
            ? {
                primary: {
                    main: "#154084",
                    alt: "#9d2719",
                    altMain: {
                        100: "#d0d9e6",
                        200: "#a1b3ce",
                        300: "#738cb5",
                        400: "#44669d",
                        500: "#154084",
                        600: "#11336a",
                        700: "#0d264f",
                        800: "#081a35",
                        900: "#040d1a",
                    },
                },
                secondary: {
                    main: "#188fff",
                    alt: "#e95f4d", // $accent-red
                },
                neutral: {
                    dark: "#222222",
                    main: "#d0d0d0",
                    light: "#fcfcfc", // Default light background color
                },
                background: {
                    default: "#20232A",
                    alt: "#16181D",
                    test: "red",
                    inverted: "#fcfcfc", // Default light background color
                },
                typography: {
                    inverted: "black",
                    main: "#FFFFFF",
                    letters: "#FFFFFF",
                    numbers: "#61DAFB",
                },
            }
            : {
                primary: {
                    main: "#154084", // $base-blue
                },
                secondary: {
                    main: "#188fff", // $accent-blue
                },
                neutral: {
                    dark: "#222222",
                    main: "#d0d0d0",
                    light: "#fcfcfc", // Default light background color
                },
                background: {
                    default: "#fcfcfc",
                    alt: "#ffffff",
                    inverted: "#222222", // $background-color-dark
                },
                typography: {
                    main: "#222222",
                },
            })),
        typography: {
            fontFamily: ["Source Sans 3", "Baumans", "sans-serif"].join(","),
            fontSize: 16,
            h1: {
                fontFamily: ["Source Sans 3", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Source Sans 3", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Source Sans 3", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Source Sans 3", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Source Sans 3", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Source Sans 3", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    };
};
exports.themeSettings = themeSettings;
// context for color mode
exports.ColorModeContext = (0, react_1.createContext)({
    toggleColorMode: () => { },
});
const useMode = () => {
    const [mode, setMode] = (0, react_1.useState)("light");
    const colorMode = (0, react_1.useMemo)(() => ({
        toggleColorMode: () => {
            setMode((prev) => (prev === "light" ? "dark" : "light"));
        },
    }), []);
    const theme = (0, react_1.useMemo)(() => (0, styles_1.createTheme)((0, exports.themeSettings)(mode)), [mode]);
    return { theme, colorMode };
};
exports.useMode = useMode;
