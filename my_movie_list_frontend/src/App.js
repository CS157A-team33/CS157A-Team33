import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./LogIn/login";
import Home from "./Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Movie from "./components/Movie/Movie";
import SignUp from "./SignUp/signup";
import Profile from "./components/Profile/Profile"

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/SignUp" exact component={SignUp} />
        <Route path="/home" component={Home} exact />
        <Route path="/Profile" component={Profile} />
        <Route path="/:movieId" component={Movie} exact />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
