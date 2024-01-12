import { ThemeProvider, createTheme } from '@mui/material/styles';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import Theme from './components/context/Theme';
import './css/base.scss';
import './css/index.css';
import './css/variables.scss';
import store from './redux/store';

const container = document.getElementById('root');
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#1b1b1b',
//     },
//     secondary: {
//       main: '#ffffff',
//     },
//     grey: {
//       50: '#fafafa',
//       100: '#f5f5f5',
//     },
//   },
// });

if (container) {
  const root = createRoot(container);
  root.render(
    // <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Theme>
        <App />
      </Theme>
    </Provider>,
    // </ThemeProvider>,
  );
}
