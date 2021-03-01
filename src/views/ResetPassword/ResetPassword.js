import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

import { useHistory } from "react-router-dom";
import FormView from "../../components/FormView/FormView";
import { Input, Button } from "../../components/FormView/Inputs";

import "./ResetPassword.css";

const ResetPassword = () => {
  // states
  const [passwords, setPasswords] = useState({
    password: "",
    repassword: "",
  });
  const [error, setError] = useState(null);

  // other hooks
  const history = useHistory();

  const handlePasswordReset = (e) => {
    e.preventDefault();
    const {password, repassword} = passwords;

    // validate then use history.push
    if (password !== repassword) {
      setError("Passwords don't  match.");
      return false;
    }

    history.push("/login");
  };

  const handleTextChange = (e) => {
    const { name, value } = e.target;

    setPasswords({ ...passwords, [name]: value });
  };

  return (
    <div className='reset-password'>
      <FormView>
        <div className='container'>
          <div className='heading'>
            <h2>Reset Password</h2>
            <span>Enter a new password to continue</span>
          </div>
          <form onSubmit={handlePasswordReset}>
            <Input
              type='password'
              name='password'
              id='password'
              required={true}
              placeholder='New password'
              inputFuncs={{
                onChange: handleTextChange,
                value: passwords.password,
              }}
            />
            <Input
              type='password'
              name='repassword'
              id='repassword'
              required={true}
              placeholder='confirm password'
              inputFuncs={{
                onChange: handleTextChange,
                value: passwords.repassword,
              }}
            />
            <Button type='submit'>Change password</Button>
          </form>
        </div>
      </FormView>
    </div>
  );
};

export default ResetPassword;
