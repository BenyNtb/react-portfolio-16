import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from "react-i18next";

import i18n from "./components/i18n";
import App from './App';


ReactDOM.render(
  <React.Suspense fallback="loading...">
    <App />
  </React.Suspense>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

