import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,HashRouter } from 'react-router-dom'

import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter >
    <App />
  </HashRouter>
);

// 18版本，react-dom不再支持
// ReactDOM.render(<App />,document.getElementById('root'))

// 监测记录页面性能
// reportWebVitals();
