import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// views
import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/FormPages/LoginPage/LoginPage";
import SignupPage from "./views/FormPages/SignupPage/SignupPage";

import SuccessfulSignup from "./views/SuccessfulSignup/SuccessfulSignup";
import RecoverPassword from "./views/FormPages/RecoverPassword/RecoverPassword";
import ResetPassword from "./views/FormPages/ResetPassword/ResetPassword";
import EmailConfirmation from "./views/EmailConfirmationPage/EmailConfirmation";
import CodeVerification from "./views/FormPages/CodeVerification/CodeVerification";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PrivatePages from "./PrivatePages";
import EditDetails from "./views/FormPages/ProfileSetupPages/EditDetails";
import UploadAvatar from "./views/FormPages/ProfileSetupPages/EditAvatar";
import CreatePitch from "./views/FormPages/ProfileSetupPages/CreatePitch";

// css
import "./App.css";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={() => <LandingPage />} />
            {/* formpages */}
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
            <PrivateRoute
              exact
              path='/user/profile/edit-user-details'
              component={EditDetails}
            />
            <PrivateRoute
              exact
              path='/user/profile/upload-avatar'
              component={UploadAvatar}
            />
            <PrivateRoute
              exact
              path='/user/profile/create-pitch'
              component={CreatePitch}
            />
            <PrivateRoute path='/user' component={PrivatePages} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
