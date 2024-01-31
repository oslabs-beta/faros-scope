import 'react-app-polyfill/stable'
import 'core-js'
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store/store';
// import "./index.scss" 
// import './css/index.css';
// import './css/variables.scss';
// import './css/theme.scss';

const container = document.getElementById('root');

container ? createRoot(container).render(
    <StrictMode>
    <Provider store={store}>
    <App />
        </Provider>
        </StrictMode>
) : null;
