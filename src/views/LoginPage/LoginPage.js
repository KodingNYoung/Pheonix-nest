import React from "react";

// router
import { useHistory } from "react-router-dom";

// component
import FormView from "../../components/FormView/FormView";
import { Input, Button } from "../../components/FormView/Inputs";

// css
import "./LoginPage.css";

const LoginPage = () => {
  const history = useHistory();

  const handleUserLogin = () => {
    // validaete then use history.psuh
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
              Don't have an account? <a href='#'>sign up</a>
            </span>
          </div>
          <a href='#'>forgot password?</a>
        </footer>
      </div>
    </FormView>
  );
};

export default LoginPage;
