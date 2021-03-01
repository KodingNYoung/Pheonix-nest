import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

// router
import { useHistory } from "react-router-dom";

// component
import FormView from "../../components/FormView/FormView";
import { Input, Button } from "../../components/FormView/Inputs";
import { Anchor } from "../../components/Navs/Links";

// css
import "./LoginPage.css";

const LoginPage = () => {
  const [userInputs, setUserInputs] = useState({
    email: "",
    password: "",
  });

  // other hooks
  const history = useHistory();
  const { signin } = useAuthContext();

  const handleUserLogin = (e) => {
    e.preventDefault();

    const { email, password } = userInputs;
    // validate then use history.push
    signin(email, password);
    // .then((res) => {
    //   if (res.success) {
    //     history.push("/home");
    //   } else {
    //     throw new Error(res.message);
    //   }
    // })
    // .catch((err) => {
    //   console.log(err.message || err.Error);
    // });
  };
  const handleTextChange = (e) => {
    const { name, value } = e.target;

    setUserInputs({ ...userInputs, [name]: value });
  };

  return (
    <FormView>
      <div className='container'>
        <h2>Login</h2>
        <form className='login-form' onSubmit={handleUserLogin}>
          <Input
            type='email'
            name='email'
            id='email'
            required={true}
            placeholder='Email'
            inputFuncs={{
              onChange: handleTextChange,
              value: userInputs.email,
            }}
          />
          <Input
            type='password'
            name='password'
            id='password'
            required={true}
            placeholder='password'
            inputFuncs={{
              onChange: handleTextChange,
              value: userInputs.password,
            }}
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
              Don't have an account? <Anchor to='/signup'>sign up</Anchor>
            </span>
          </div>
          <Anchor to='../recover-password'>forgot password?</Anchor>
        </footer>
      </div>
    </FormView>
  );
};

export default LoginPage;
