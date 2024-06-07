import ReactDOM from 'react-dom/client';
import { clarity } from 'react-microsoft-clarity';
import WebApp from '@twa-dev/sdk';

import App from './App';
// mo4nl3vxvq
clarity.init('mo4nl3vxvq');
clarity.consent();
WebApp.ready();
WebApp.expand();
WebApp.setBackgroundColor('#C3B091');
WebApp.setHeaderColor('#0e87cc');
WebApp.enableClosingConfirmation;
ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
