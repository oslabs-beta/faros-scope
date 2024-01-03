import App from './App';
import Theme from './components/context/Theme';
import store from './redux/store';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
// import { Profiler } from 'react';
import './css/index.css';
import './css/base.scss';
import './css/variables.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const container = document.getElementById('root');

const theme = {
  palette: {
    primary: {
      main: '#1b1b1b',
    },
    secondary: {
      main: '#ffffff',
    },
  },
};

if (container) {
  const root = createRoot(container);
  root.render(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Theme>
          <App />
        </Theme>
      </Provider>
    </ThemeProvider>,
  );
}
