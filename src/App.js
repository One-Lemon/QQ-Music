import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Mine from "./pages/mine";
import Music from "./pages/music";
import Header from "./pages/header";
export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/music" component={Music} />
            <Route path="/mine" component={Mine} />
            <Redirect to="/music" />
          </Switch>
        </div>
      </Router>
    );
  }
}
