import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 18版本，react-dom不再支持
// ReactDOM.render(<App />,document.getElementById('root'))

// 监测记录页面性能
// reportWebVitals();
