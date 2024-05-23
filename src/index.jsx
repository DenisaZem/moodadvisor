import { createRoot } from 'react-dom/client';
import { App } from './pages/App';
import './global.css';
import "./i18n"

createRoot(
  document.querySelector('#app'),
).render(<App />);
