import * as React from 'react';
import { createRoot } from 'react-dom/client';
import '@adrian-danciu/ink-ui/styles.css';
import './styles/portfolio.css';
import { App } from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element #root not found');
}

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
