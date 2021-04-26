import React, { useState } from "react";
import { useAuthContext } from "../../../context/AuthContext";

// router
import { useHistory } from "react-router-dom";

// components
import FormView from "../../../components/FormView/FormView";
import { Input } from "../../../components/FormView/Inputs";
import { Button } from "../../../components/Buttons/Buttons";
import { Anchor } from "../../../components/Links/Links";

// css
import "./LoginPage.css";

const LoginPage = () => {
  const [userInputs, setUserInputs] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // other hooks
  const history = useHistory();
  const { signin } = useAuthContext();

  const handleUserLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    const { email, password } = userInputs;
    // validate then use history.push
    signin(email, password)
      .then((res) => {
        setLoading(false);
        if (res.success) {
          history.push("/user");
        } else {
          throw new Error(res.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  };
  const handleTextChange = (e) => {
    setError(null);
    const { name, value } = e.target;

    setUserInputs({ ...userInputs, [name]: value });
  };

  return (
    <FormView>
      <div className="container">
        <h2>Login</h2>
        {error && <p> {error} </p>}
        <form className="login-form" onSubmit={handleUserLogin}>
          <Input
            type="email"
            name="email"
            id="email"
            required={true}
            placeholder="Email"
            inputFuncs={{
              onChange: handleTextChange,
              value: userInputs.email,
              disabled: loading,
            }}
          />
          <Input
            type="password"
            name="password"
            id="password"
            required={true}
            placeholder="password"
            inputFuncs={{
              onChange: handleTextChange,
              value: userInputs.password,
              disabled: loading,
            }}
          />
          <Button type="submit" loading={loading}>
            login
          </Button>
        </form>

        <footer>
          <div className="signup-text">
            <span>
              Don't have an account?{" "}
              <Anchor className="form-link" to="/signup">
                sign up
              </Anchor>
            </span>
          </div>
          <Anchor className="form-link" to="../recover-password">
            forgot password?
          </Anchor>
        </footer>
      </div>
    </FormView>
  );
};

export default LoginPage;
