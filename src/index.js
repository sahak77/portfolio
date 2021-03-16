import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { LoaderProvider, ThreeDots } from '@agney/react-loading';

ReactDOM.render(
  <React.StrictMode>
    <LoaderProvider indicator={<ThreeDots width="250" stroke="#00fff5" fill="#222831" />}>
      <App />
    </LoaderProvider>
  </React.StrictMode>,

  document.getElementById('root')
);