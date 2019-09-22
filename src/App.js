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
// 路由懒加载
export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/music" component={Music} />
          <Route path="/mine" component={Mine} />
          <Redirect to="/music/index" />
        </Switch>
      </Router>
    );
  }
}
