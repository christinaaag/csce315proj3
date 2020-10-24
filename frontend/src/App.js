import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Dashboard from "./containers/dashboard";
import Landing from "./containers/landing";
import Axios from "axios"
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={"/"} component={Landing} />
          <Route path={"/dashboard"} component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
