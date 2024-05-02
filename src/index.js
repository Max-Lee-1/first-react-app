import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Background from "./Background";
import Nav from "./Nav";
import Home from "./Home";
import Help from "./Help";
import Article from "./Article";
import Quiz from "./Quiz";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Background />
    <Nav />
    <Home />
    <Quiz />
    <Article />
    <Help />
  </React.StrictMode>
);

reportWebVitals();
