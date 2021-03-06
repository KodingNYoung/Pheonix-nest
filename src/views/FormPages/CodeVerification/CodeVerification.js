import React, { useState } from "react";
import { useAuthContext } from "../../../context/AuthContext";

import { useHistory } from "react-router-dom";

//
import FormView from "../../../components/FormView/FormView";
import { Input, Button } from "../../../components/FormView/Inputs";

import "./CodeVerification.css";

const CodeVerification = () => {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // other hooks
  const history = useHistory();
  const { verifyToken } = useAuthContext();

  const handleTokenVerification = (e) => {
    e.preventDefault();
    // validate then use history.psuh

    setLoading(true);
    verifyToken(localStorage.getItem("recovery-email"), token)
      .then((res) => {
        setLoading(false);
        if (res.success) {
          localStorage.removeItem("recovery-email");
          localStorage.setItem("token", token);
          history.push("/reset-password");
        } else {
          throw new Error(res.message);
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
    const number = Number(value);

    if (Number.isInteger(number)) {
      setToken(value);
    } else {
      setError("Input is not a number");
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
          {error && <p>{error}</p>}
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
                disabled: loading,
              }}
            />
            <Button type='submit' disabled={loading}>
              {loading ? "loading..." : "Verify code"}
            </Button>
          </form>
          <button className='resend-btn'>resend code</button>
        </div>
      </FormView>
    </div>
  );
};

export default CodeVerification;
