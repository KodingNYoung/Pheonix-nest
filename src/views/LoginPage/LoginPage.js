import React from "react";
import {Logo} from "../../components/Logo/Logo";

// router
import { useHistory } from "react-router-dom";

// css
import "./LoginPage.css";

const LoginPage = () => {
  const history = useHistory();

  const handleUserLogin = () => {
    // validaete then use history.psuh
    history.push("/home");
  };

  return (
    <div className="login-page">
      <header>
        <Logo className="login-logo" />
        <h1>Phoenix Nest</h1>
      </header>
      <main className="login-main">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleUserLogin}>
          <div className="input-field">
            <input type="text" name="email" id="email" required />
            <label htmlFor="email" className="label">
              Email
            </label>
          </div>
          <div className="input-field">
            <input type="password" name="password" id="password" required />
            <label htmlFor="password" className="label">
              Password
            </label>
          </div>
          <button type="submit" className="submit-btn">
            sign in
          </button>
        </form>
        <div className="remember-me">
          <span>Remember me next time</span>
          <input type="checkbox" name="remember-me" id="remember-me" />
        </div>
        <footer>
          <div className="signup-text">
            <span>
              Don't have an account? <a href="#">sign up</a>
            </span>
          </div>
          <a href="#">forgot password?</a>
        </footer>
      </main>
    </div>
  );
};

export default LoginPage;
