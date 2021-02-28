import React from "react";
import FormView from "../../components/FormView/FormView";
import { Input, Button } from "../../components/FormView/Inputs";
import { Anchor } from "../../components/Navs/Links";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./CodeVerification.css";
import { useHistory } from "react-router-dom";

const CodeVerification = () => {
  const history = useHistory();

  const handleCodeVerification = () => {
    // validate then use history.psuh
    history.push("/signup/welcome");
  };

  return (
    <div className='code-verification'>
      <FormView>
        <div className='container'>
          <div className='heading'>
            <h2>Email verification</h2>
            <span>please, enter the code we sent to your email.</span>
          </div>
          <form onSubmit={handleCodeVerification}>
            <Input
              type='text'
              name='verification-code'
              id='verification-code'
              required={true}
              placeholder='verification code'
              inputFuncs={{ maxLength: "4" }}
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
