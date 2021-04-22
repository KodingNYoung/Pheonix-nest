import React, { useState } from "react";
import { useAuthContext } from "../../../context/AuthContext";

import { useHistory } from "react-router-dom";

//
import FormView from "../../../components/FormView/FormView";
import { Button, PinInput } from "../../../components/FormView/Inputs";

import "./CodeVerification.css";

const CodeVerification = () => {
  const [token, setToken] = useState(new Array(4).fill(""));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // other hooks
  const history = useHistory();
  const { verifyToken } = useAuthContext();

  // onchange
  const handlePinInput = (e, index) => {
    const element = e.target;

    if (isNaN(element.value) || element.value === " ") return;

    const newToken = token.map((digit, i) => {
      if (index === i) {
        return element.value;
      }
      return digit;
    });
    setToken(newToken);
    // if it was backspace that was pressed
    if (element.value === "") {
      // if it has a previous box
      if (element.previousElementSibling) {
        element.previousElementSibling.focus();
      } else {
        // if it doesn't
        return;
      }
    } else if (element.nextElementSibling) {
      // if it wasn't a backspace and there is a next box
      element.nextElementSibling.focus();
    }
  };

  const handleTokenVerification = (e) => {
    e.preventDefault();

    setLoading(true);
    console.log(token.join(""));
    verifyToken(localStorage.getItem("recovery-email"), token.join(""))
      .then((res) => {
        setLoading(false);
        if (res.success) {
          localStorage.removeItem("recovery-email");
          localStorage.setItem("token", token.join(""));
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

  return (
    <div className="code-verification">
      <FormView>
        <div className="container">
          <div className="heading">
            <h2>Email verification</h2>
            <span>please, enter the 4 digit code we sent to your email.</span>
          </div>
          {error && <p>{error}</p>}
          <form onSubmit={handleTokenVerification}>
            <PinInput
              name="token"
              inputFuncs={{
                pinDigits: token,
                handlePinInput: handlePinInput,
                disabled: loading,
              }}
            />
            <Button type="submit" disabled={loading}>
              {loading ? "loading..." : "Verify code"}
            </Button>
          </form>
          <button className="resend-btn">resend code</button>
        </div>
      </FormView>
    </div>
  );
};

export default CodeVerification;
