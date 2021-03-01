import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

import FormView from "../../components/FormView/FormView";
import { Input, Button } from "../../components/FormView/Inputs";
import { Anchor } from "../../components/Navs/Links";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./RecoverPassword.css";

const RecoverPassword = () => {
  // states
  const [email, setEmail] = useState("");

  // other hooks
  const history = useHistory();
  const { recoverPassword } = useAuthContext();

  const handlePasswordRecover = (e) => {
    e.preventDefault();

    recoverPassword(email)
      .then((response) => {
        console.log(response);
        history.push("/code-verification");
      })
      .catch((m) => {
        console.log(m);
      });
  };

  const handleTextChange = (e) => {
    const { value } = e.target;

    setEmail(value);
  };

  return (
    <div className='recover-password'>
      <FormView>
        <div className='container'>
          <div className='heading'>
            <h2>Recover Password</h2>
            <span>Enter your registered email to reset password</span>
          </div>
          <form onSubmit={handlePasswordRecover}>
            <Input
              type='email'
              name='email'
              id='email'
              required={true}
              placeholder='email'
              inputFuncs={{
                onChange: handleTextChange,
                value: email,
              }}
            />
            <Button type='submit'>Reset password</Button>
          </form>
          <Anchor className='transparent-link' to='/login'>
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Go back</span>
          </Anchor>
        </div>
      </FormView>
    </div>
  );
};

export default RecoverPassword;
