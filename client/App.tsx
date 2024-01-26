import { Routes, Route } from 'react-router-dom';
import { ColorModeContext, useMode } from './theme';
import { ThemeProvider } from '@mui/system';
import { CssBaseline } from '@mui/material';
import { HomePage } from './pages';
// import { SettingsPage } from './pages';
import { LandingPage } from './pages';
import { MainPage } from './pages';
import { NodeView } from './pages';
import { ListViewDisplay } from './components';
import { GraphPage } from './pages/GraphPage/GraphPage';
import { WorkloadView } from './pages';

const App = () => {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={{ ...colorMode, toggleColorMode: () => {} }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Routes>
                    <Route path="/" element={<MainPage />}>
                        <Route index element={<HomePage />} />
                        <Route path="/list-view" element={<ListViewDisplay />} />
                        <Route path="/node-view" element={<NodeView />} />
                        <Route path="/workload-view" element={<WorkloadView />} />
                        {/* <Route path="settings" element={<SettingsPage />} /> */}
                        <Route path="graph-view" element={<GraphPage />} />
                    </Route>
                    <Route path="landing" element={<LandingPage />} />
                </Routes>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default App;
