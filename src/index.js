import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AppProvider } from './context'
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
    <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

