import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

import { useHistory } from "react-router-dom";

//
import FormView from "../../components/FormView/FormView";
import { Input, Button } from "../../components/FormView/Inputs";

import "./CodeVerification.css";

const CodeVerification = ({ email }) => {
  const [token, setToken] = useState("");

  // other hooks
  const history = useHistory();
  const { verifyToken } = useAuthContext();

  const handleTokenVerification = (e) => {
    e.preventDefault();
    // validate then use history.psuh
    verifyToken(email, token);
    history.push("/reset-password");
  };

  const handleTextChange = (e) => {
    const { value } = e.target;
    const number = Number(value)
    
    if (Number.isInteger(number) ) {
      setToken(value);
    }else {
      console.log(' not a number')
    }
  };
  return (
    <div className='code-verification'>
      <FormView>
        <div className='container'>
          <div className='heading'>
            <h2>Email verification</h2>
            <span>please, enter the 4 digit code we sent to your email.</span>
          </div>
          <form onSubmit={handleTokenVerification}>
            <Input
              type='text'
              name='token'
              id='token'
              required={true}
              placeholder='verification token'
              inputFuncs={{
                maxLength: "4",
                onChange: handleTextChange,
                value: token,
              }}
            />
            <Button type='submit'>Verify code</Button>
          </form>
          <button className='resend-btn'>resend code</button>
        </div>
      </FormView>
    </div>
  );
};

export default CodeVerification;
