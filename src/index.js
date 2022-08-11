import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import Card from './components/Card';
import Contacts from './components/Contacts';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <div>
    <h1 className='heading'>My Contact</h1>
    <App />
  </div >
);

