import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// views
import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/LoginPage/LoginPage";
import SignupPage from "./views/SignupPage/SignupPage";
import HomePage from "./views/HomePage/HomePage";
import PitchPage from "./views/PitchPage";
import ProfilePage from "./views/ProfilePage";

// css
import "./App.css" 

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={() => <LandingPage />} />
          <Route path="/login" component={() => <LoginPage />} />
          <Route path="/signup" component={() => <SignupPage />} />
          <Route path="/home" component={() => <HomePage />} />
          {/* <Route path="/pitch" component={() => <PitchPage />} /> */}
          {/* <Route path="/profile" component={() => <ProfilePage />} /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
