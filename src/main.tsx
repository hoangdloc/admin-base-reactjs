import '@fontsource-variable/epilogue';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@/app';

import '@/locales/i18n';

import './index.css';

window.addEventListener('vite:preloadError', () => {
  window.location.reload();
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
