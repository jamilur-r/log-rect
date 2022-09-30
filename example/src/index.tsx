import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { LogRect } from "log-rect";

ReactDOM.render(
  <LogRect mode="DEV">
    <App />
  </LogRect>,

  document.getElementById("root")
);
