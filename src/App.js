import React from "react";
import Login from "./components/loginComponent/Login.jsx"
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/homeComponent/Home";
import Navbar from "./components/homeComponent/Nav/Navbar";
import HrDashboard from "./dashboard/hrDashboard/hrDashboard";


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/">
            <Navbar />
            <Home />
          </Route>

          <Route path="/hrDashboard">
            <HrDashboard />
          </Route>

          <Route path="/Login">
            <Login />
          </Route>

          <Redirect to="/hrDashboard" />
          <Redirect to="/login" />
          <Redirect to="/" />
          <Redirect to="/login" />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
