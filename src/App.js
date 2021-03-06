import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";

import Portfolio from "./containers/Portfolio/Portfolio";


function App() {
  return (
    <div className="container-flex">
      <Router>
        <Switch>
          <Route exact path="/" component= {Home}/>
          <Route exact path="/about" component= {About}/>
          <Route exact path="/portfolio" component= {Portfolio}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
