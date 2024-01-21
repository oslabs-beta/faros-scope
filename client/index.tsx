import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { MarcoThemeProvider } from './context';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import './css/index.css';
import './css/base.scss';
import './css/variables.scss';

const theme = createTheme({
  components: {},
  palette: {
    primary: {
      main: '#222222',
      light: '#ECECEC',
      dark: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
    },
  },
});

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <Provider store={store}>
      <MarcoThemeProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </MarcoThemeProvider>
    </Provider>,
  );
}
