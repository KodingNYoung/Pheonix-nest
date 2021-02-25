import React from "react";
import { useHistory } from "react-router-dom";
import FormView from "../../components/FormView/FormView";
import { Input, Button } from "../../components/FormView/Inputs";

import "./ResetPassword.css";
const ResetPassword = () => {
  const history = useHistory();

  const handlePasswordReset = () => {
    // validate then use history.psuh
    history.push("/login");
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
              id='new-password'
              required={true}
              placeholder='New password'
            />
            <Input
              type='password'
              name='password'
              id='confirm-password'
              required={true}
              placeholder='confirm password'
            />
            <Button type='submit'>Change password</Button>
          </form>
        </div>
      </FormView>
    </div>
  );
};

export default ResetPassword;
