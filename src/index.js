import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./variable.css";
import Background from "./Background";
import Nav from "./Nav";
import Landing from "./Landing";
import Help from "./Help";
import Article from "./Article";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Background />
    <Nav />
    <Landing />
    <Help />
    <Article />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
