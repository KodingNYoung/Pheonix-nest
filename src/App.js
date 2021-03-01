import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// views
import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/LoginPage/LoginPage";
import SignupPage from "./views/SignupPage/SignupPage";
import HomePage from "./views/HomePage/HomePage";
import PitchPage from "./views/PitchPage/PitchPage";
import ProfilePage from "./views/ProfilePage/ProfilePage";
import SuccessfulSignup from "./views/SuccessfulSignup/SuccessfulSignup";
import RecoverPassword from "./views/RecoverPassword/RecoverPassword";
import ResetPassword from "./views/ResetPassword/ResetPassword";
import EmailConfirmation from "./views/EmailConfirmationPage/EmailConfirmation";
import CodeVerification from "./views/CodeVerification/CodeVerification";

// css
import "./App.css";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={() => <LandingPage />} />
            <Route exact path='/login' component={() => <LoginPage />} />
            <Route
              exact
              path='/recover-password'
              component={() => <RecoverPassword />}
            />
            <Route
              exact
              path='/reset-password'
              component={() => <ResetPassword />}
            />
            <Route exact path='/signup' component={() => <SignupPage />} />
            <Route
              exact
              path='/signup/email-confirmation'
              component={() => <EmailConfirmation />}
            />
            <Route
              exact
              path='/code-verification'
              component={() => <CodeVerification />}
            />
            <Route
              exact
              path='/signup/welcome'
              component={() => <SuccessfulSignup />}
            />
            <Route path='/home' component={() => <HomePage />} />
            <Route path='/pitch' component={() => <PitchPage />} />
            <Route path='/profile' component={() => <ProfilePage />} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
