import { createRoot } from 'react-dom/client';
import './css/index.css';
import './css/base.scss';
import './css/variables.scss';
import React from 'react';
import App from './App';
import Theme from './Theme';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <Theme>
      <App />
    </Theme>
  );
}
