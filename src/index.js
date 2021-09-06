import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createGlobalStyle, ThemeProvider} from "styled-components";
import Roboto from "./assets/fonts/Roboto-Regular.ttf"

const Global = createGlobalStyle`
  @font-face {
    font-family: "Roboto";
    src: url(${Roboto});
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", serif;
    font-size: 14px;
    line-height: 16px;
    color: ${props => props.theme.colors.text};
  }

  h2 {
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
  }
  h3 {
    font-size: 18px;
    line-height: 21px;
    font-weight: 700;
  }
  h4 {
    font-size: 16px;
    line-height: 18px;
    font-weight: 700;
  }
  h5 {
    font-size: 14px;
    line-height: 16px;
    font-weight: 700;
  }
  a {
    text-decoration: none;
  }
`
const theme = {
  colors: {
    primary: "#256EEB",
    secondary: "#14B4BE",
    text: "#0A143A",
    textGray: "#C4C4C4",
    white: "#FFFFFF"
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global/>
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
