import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import Footer from "./footer";
import Header from "./header";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

