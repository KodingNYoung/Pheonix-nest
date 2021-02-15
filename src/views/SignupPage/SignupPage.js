import React from "react";
import {Logo} from "../../components/Logo/Logo";

// router
import { useHistory } from "react-router-dom";

// css
import "./SignupPage.css";

const SignupPage = () => {
  const history = useHistory();

  const handleUserSignup = () => {
    // validaete then use history.psuh
    history.push("/home");
  };

  return (
    <div className="signup-page">
      <header>
        <Logo className="signup-logo" />
        <h1>Phoenix Nest</h1>
      </header>
      <main className="signup-main">
        <h2>sign up</h2>
        <form className="signup-form" onSubmit={handleUserSignup}>
          <p>Please fill in the details requested</p>
          <div className="input-field">
            <input type="text" name="name" id="name" required />
            <label htmlFor="name" className="label">
              Full Name
            </label>
          </div>
          <div className="input-field">
            <input type="text" name="email" id="email" required />
            <label htmlFor="email" className="label">
              Email
            </label>
          </div>
          <div className="input-field">
            <input type="tel" name="email" id="email" required />
            <label htmlFor="email" className="label">
              Phone Number
            </label>
          </div>
          <div className="input-field">
            <input type="password" name="password" id="password" required />
            <label htmlFor="password" className="label">
              Password
            </label>
          </div>
          <div className="input-field">
            <input type="password" name="password-confirm" id="password-confirm" required />
            <label htmlFor="password-confirm" className="label">
              Confirm Password
            </label>
          </div>
          <button type="submit" className="submit-btn">
            sign up
          </button>
        </form>
      </main>
    </div>
  );
};

export default SignupPage;
