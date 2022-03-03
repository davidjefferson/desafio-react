import React from 'react';
import ReactDOM from 'react-dom';
import './style/app.css';
import './style/flex.css';
import './style/form.css';
import './style/padding.css';
import './style/margin.css';
import './style/card.css';
import './style/list.css';
import './style/loading.css';
import Home from './screen/Home/Home';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
