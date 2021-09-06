import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from "styled-components";
import './index.css'
import {BrowserRouter} from "react-router-dom";

const theme = {
  colors: {
    primary: "#256EEB",
    secondary: "#14B4BE",
    text: "#0A143A",
    textGray: "#C4C4C4",
    white: "#FFFFFF",
    black: "#000000"
  },

}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
