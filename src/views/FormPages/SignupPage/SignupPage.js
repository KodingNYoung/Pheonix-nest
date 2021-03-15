import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../../context/AuthContext";

// router
import { useHistory } from "react-router-dom";

// css
import "./SignupPage.css";

// components
import FormView from "../../../components/FormView/FormView";
import { Input, Button } from "../../../components/FormView/Inputs";
import { Anchor } from "../../../components/Navs/Links";

const SignupPage = () => {
  // states
  const [userInputs, setUserInputs] = useState({
    fullname: "",
    email: "",
    // phone: "",
    password: "",
    repassword: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // other hooks
  const history = useHistory();
  const { signup } = useAuthContext();

  const handleUserSignup = (e) => {
    e.preventDefault();
    const { fullname, email, phone, password, repassword } = userInputs;

    // check if password match
    if (password !== repassword) {
      setError("Passwords don't  match.");
      return false;
    }
    //  else if (!phone.match(/^\d{11}$/)) {
    //   setError("Phone number not valid");
    //   return false;
    // }
    setLoading(true);

    signup(fullname, email, password)
      .then((response) => {
        setLoading(false);
        if (response.success === true) {
          history.push("/signup/email-confirmation");
        } else {
          throw new Error(response.message);
        }
      })
      .catch((err) => {
        setError(err.message || err.Error);
        setLoading(false);
      });
  };

  const handleTextChange = (e) => {
    setError(null);
    const { name, value } = e.target;

    setUserInputs({ ...userInputs, [name]: value });
  };
  return (
    <FormView>
      <h2>sign up</h2>
      <form
        className='signup-form'
        onSubmit={handleUserSignup}
        autoComplete='false'
      >
        <p className='sub-heading'>Please fill in the details requested</p>
        {error && <p> {error} </p>}
        <Input
          type='text'
          name='fullname'
          id='fullname'
          required={true}
          placeholder='fullname'
          inputFuncs={{
            onChange: handleTextChange,
            value: userInputs.fullname,
            disabled: loading,
          }}
        />
        <Input
          type='email'
          name='email'
          id='email'
          required={true}
          placeholder='email'
          inputFuncs={{
            onChange: handleTextChange,
            value: userInputs.email,
            disabled: loading,
          }}
        />
        {/* <Input
          type='tel'
          name='phone'
          id='phone'
          required={true}
          placeholder='phone number'
          inputFuncs={{
            onChange: handleTextChange,
            value: userInputs.phone,
            disabled: loading,
          }}
        /> */}
        <Input
          type='password'
          name='password'
          id='password'
          required={true}
          placeholder='password'
          inputFuncs={{
            onChange: handleTextChange,
            value: userInputs.password,
            disabled: loading,
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
            value: userInputs.repassword,
            disabled: loading,
          }}
        />
        <p className='warning'>
          By signing in you agree to the{" "}
          <Anchor className='transparent-link' to=''>
            {" "}
            Terms and conditions
          </Anchor>{" "}
          of the organisation
        </p>
        <Button type='submit' disabled={loading}>
          {" "}
          {loading ? "loading" : "sign up"}
        </Button>
        <span>
          Already have an account?{" "}
          <Anchor className='transparent-link' to='/login'>
            log In
          </Anchor>
        </span>
      </form>
    </FormView>
  );
};

export default SignupPage;
