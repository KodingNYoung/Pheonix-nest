import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext";

import FormView from "../../../components/FormView/FormView";
import { Input } from "../../../components/FormView/Inputs";
import { Button } from "../../../components/Buttons/Buttons";
import { Anchor } from "../../../components/Links/Links";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./RecoverPassword.css";

const RecoverPassword = () => {
  // states
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // other hooks
  const history = useHistory();
  const { recoverPassword } = useAuthContext();

  const handlePasswordRecover = (e) => {
    e.preventDefault();
    setLoading(true);

    recoverPassword(email)
      .then((response) => {
        setLoading(false);
        if (response.success) {
          localStorage.setItem("recovery-email", email);
          history.push("/code-verification");
        } else {
          throw new Error(response.message);
        }
      })
      .catch((err) => {
        setError(err.message || err.Error || err);
        setLoading(false);
      });
  };

  const handleTextChange = (e) => {
    setError(null);
    const { value } = e.target;

    setEmail(value);
  };

  return (
    <div className="recover-password">
      <FormView>
        <div className="container">
          <div className="heading">
            <h2>Recover Password</h2>
            <span>Enter your registered email to reset password</span>
          </div>
          {error && <p> {error} </p>}
          <form onSubmit={handlePasswordRecover}>
            <Input
              type="email"
              name="email"
              id="email"
              required={true}
              placeholder="email"
              inputFuncs={{
                onChange: handleTextChange,
                value: email,
                disabled: loading,
              }}
            />
            <Button type="submit" loading={loading}>
              Reset password
            </Button>
          </form>
          <Anchor className="transparent-link" to="/login">
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Go back</span>
          </Anchor>
        </div>
      </FormView>
    </div>
  );
};

export default RecoverPassword;
