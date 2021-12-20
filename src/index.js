import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GlobalProvider from './context/GlobalContext';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

console.log("Luis Augsburger - Web developer");
console.log("https://twitter.com/augsburger_luis");

serviceWorkerRegistration.register();