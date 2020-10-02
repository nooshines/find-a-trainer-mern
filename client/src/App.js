import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Profile from "./components/pages/Profile";
import Alerts from "./components/layout/Alerts";
import PrivateRoute from "./components/routing/PrivateRoute";
import NewProfile from "./components/pages/NewProfile";
import EditProfile from "./components/pages/EditProfile";
import PublicProfile from "./components/pages/PublicProfile";

import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import TrainerContextProvider from "./context/trainer/TrainerContext";

import setAuthToken from "./components/utils/setAuthToken";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => (
  <AuthState>
    <AlertState>
      <TrainerContextProvider>
        <Router>
          <Fragment>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <section className="mainContainer">
              <Alerts />
              <Switch>
                <PrivateRoute exact path="/home" component={Home} />
                <PrivateRoute exact path="/profile" component={Profile} />
                <PrivateRoute
                  exact
                  path="/profile/:id"
                  component={PublicProfile}
                />
                <PrivateRoute exact path="/newprofile" component={NewProfile} />
                <PrivateRoute
                  exact
                  path="/editprofile"
                  component={EditProfile}
                />
                <Route exact path="/about" component={About} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </section>
          </Fragment>
        </Router>
      </TrainerContextProvider>
    </AlertState>
  </AuthState>
);

export default App;
