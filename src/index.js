import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App2 from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.8.2/css/bulma.min.css"
      />
    </head>
    <body>
      <React.StrictMode>
        <App2 />
      </React.StrictMode>
    </body>
  </html>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
