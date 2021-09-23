import React from "react";
import reactDom from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
reactDom.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App></App>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
