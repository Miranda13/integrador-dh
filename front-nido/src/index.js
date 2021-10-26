import React from 'react';
import ReactDOM from 'react-dom';
import FirstComponent from "./components/first";
import '@fortawesome/fontawesome-free/css/all.min.css';

ReactDOM.render(
  <React.StrictMode>
    <FirstComponent/>
  </React.StrictMode>,
  document.getElementById('root')
);

