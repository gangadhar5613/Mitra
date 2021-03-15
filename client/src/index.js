import React from "react";
import ReactDOM from "react-dom";

// components

import App from "./components/App";

// stylesheets

import "./stylesheet/tailwind.scss";
import "./stylesheet/main.scss";
import Register from "./components/auth/Register";

ReactDOM.render(<App />, document.querySelector("#root"));
