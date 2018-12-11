import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/paper-dashboard.scss";
import "./assets/demo/demo.css";

import indexRoutes from "./routes/index.jsx";

const hist = createBrowserHistory();

axios.defaults.baseURL = "http://localhost:3000/";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

const admin = {
  email: "admin@email.com",
  password: "eutenhoumviolaorosa"
};

let user = {};

axios.post("/login", admin)
  .then(response => {
    user = response.data;
    console.log("login done");
    axios.defaults.headers.common["Authorization"] =
      "bearer " + response.data.token;
  })
  .catch(function(error) {
    console.log("Login error: " + error);
  });

console.log(user);


ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} key={key} component={prop.component} />;
      })}
    </Switch>
  </Router>,
  document.getElementById("root")
);
