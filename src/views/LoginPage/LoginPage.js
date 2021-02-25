import React from "react";

// router
import { useHistory } from "react-router-dom";

// component
import FormView from "../../components/FormView/FormView";
import { Input, Button } from "../../components/FormView/Inputs";
import { Anchor } from "../../components/Navs/Links";

// css
import "./LoginPage.css";

const LoginPage = () => {
  const history = useHistory();

  const handleUserLogin = () => {
    // validate then use history.psuh
    history.push("/home");
  };

  return (
    <FormView>
      <div className='container'>
        <h2>Login</h2>
        <form className='login-form' onSubmit={handleUserLogin}>
          <Input
            type='text'
            name='email'
            id='email'
            required={true}
            placeholder='Email'
          />
          <Input
            type='password'
            name='password'
            id='password'
            required={true}
            placeholder='password'
          />
          <Button type='submit'>login</Button>
        </form>
        <div className='remember-me'>
          <span>Remember me next time</span>
          <input type='checkbox' name='remember-me' id='remember-me' />
        </div>
        <footer>
          <div className='signup-text'>
            <span>
              Don't have an account? <Anchor to="/signup">sign up</Anchor>
            </span>
          </div>
          <Anchor to="../recover-password">forgot password?</Anchor>
        </footer>
      </div>
    </FormView>
  );
};

export default LoginPage;
