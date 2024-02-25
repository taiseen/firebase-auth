import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React from "react";

import "react-toastify/dist/ReactToastify.css";
import "./style/index.css";

const htmlRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(htmlRoot);

reactRoot.render(
  <React.StrictMode>

    <Router>
      <App />
    </Router>

    <ToastContainer theme="colored" position="top-right" autoClose={5000} />

  </React.StrictMode>
);