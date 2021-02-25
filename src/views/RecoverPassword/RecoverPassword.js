import React from "react";
import FormView from "../../components/FormView/FormView";
import { Input, Button } from "../../components/FormView/Inputs";
import { Anchor } from "../../components/Navs/Links";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./RecoverPassword.css";
const RecoverPassword = () => {
  return (
    <div className='recover-password'>
      <FormView>
        <div className='container'>
          <div className='heading'>
            <h2>Recover Password</h2>
            <span>Enter your registered email to reset password</span>
          </div>
          <form>
            <Input
              type='text'
              name='email'
              id='email'
              required={true}
              placeholder='email'
            />
            <Button type='submit'>Reset password</Button>
          </form>
          <Anchor className='transparent-link'>
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Go back</span>
          </Anchor>
        </div>
      </FormView>
    </div>
  );
};

export default RecoverPassword;
