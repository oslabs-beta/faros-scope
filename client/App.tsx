import { Routes, Route, BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider } from "@mui/system";
import { CssBaseline } from "@mui/material";
import { CSpinner } from "@coreui/react";
// import { HomePage } from './pages';
// import { SettingsPage } from './pages';
// import { LandingPage } from './pages';
// import { MainPage } from './pages';
// import { NodeView } from './pages';
// import { ListViewDisplay } from './components';
// import { GraphPage } from './pages/GraphPage/GraphPage';
// import { WorkloadView } from './pages';

import "./scss/style.scss";

// Containers
import DefaultLayout from "./layout/DefaultLayout";

const Loader = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <CSpinner variant="grow" />
    </div>
  );
};

const App = () => {
  const { theme, colorMode } = useMode();

  return (
    <div className="app">
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Routes>
                <Route path="/*" element={<DefaultLayout />} />
                {/* <Route path="/" element={<Navigate to="/dashboard" replace />} /> */}
                {/* <Route path="/dashboard" element={<HomePage />} />
                <Route path="/dashboard" element={<ListViewDisplay />} />
                <Route path="/node-view" element={<NodeView />} />
                <Route path="/workload-view" element={<WorkloadView />} />
                <Route path="settings" element={<SettingsPage />} />
                </Route>
                <Route path="landing" element={<LandingPage />} /> */}
              </Routes>
            </ThemeProvider>
          </ColorModeContext.Provider>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;

/*
import { Routes, Route } from 'react-router-dom';
import { ColorModeContext, useMode } from './theme';
import { ThemeProvider } from '@mui/system';
import { CssBaseline } from '@mui/material';
import { HomePage } from './pages';
import { LandingPage, NodeView, MainPage } from './pages';
import { WorkloadView } from './pages';
import { ListViewPage } from './pages/ListViewPage/ListViewPage';

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route index element={<HomePage />} />
            <Route path="list-view" element={<ListViewPage />} />
            <Route path="node-view" element={<NodeView />} />
            <Route path="workload-view" element={<WorkloadView />} />
          </Route>
          <Route path="landing" element={<LandingPage />} />
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
*/
