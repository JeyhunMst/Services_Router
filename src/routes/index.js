import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ROUTER } from "./consts";
import Home from "../components/Home";
import Users from "../components/Users";
import Navbar from "../components/Navbar";


function Routes() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTER.PATH} exact>
          <Home />
        </Route>
        <Route path={ROUTER.USER.PATH} component={Users} exact />
        <Route path={ROUTER.NAVBAR}>
            <Navbar/>
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;