import React, { useEffect, useState } from "react";
import { useAuthcontext, useAuthContext } from "../../context/AuthContext";

// router
import { useHistory } from "react-router-dom";

// css
import "./SignupPage.css";

// components
import FormView from "../../components/FormView/FormView";
import { Input, Button } from "../../components/FormView/Inputs";
import { Anchor } from "../../components/Navs/Links";

const SignupPage = () => {
  // states
  const [userInputs, setUserInputs] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    repassword: "",
  });
  const [error, setError] = useState(null);

  // other hooks
  const history = useHistory();
  const { signup } = useAuthcontext();



  const handleUserSignup = (e) => {
    e.preventDefault();
    const { fullname, email, phone, password, repassword } = userInputs;

    // check if password match
    if (password !== repassword) {
      setError("Passwords don't  match.");
      return false;
    } else if (!phone.match(/^\d{11}$/)) {
      setError("Phone number not valid");
      return false;
    }

    signup(fullname, email, password)
      .then((response) => {
        if (response.success === true) {
          history.push("/signup/email-confirmation");
        } else throw new Error(response.message);
      })
      .catch((m) => {
        console.log(m);
      });
  };

  const handleTextChange = (e) => {
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
        <Input
          type='text'
          name='fullname'
          id='fullname'
          required={true}
          placeholder='fullname'
          inputFuncs={{
            onChange: handleTextChange,
            value: userInputs.fullname,
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
          }}
        />
        <Input
          type='tel'
          name='phone'
          id='phone'
          required={true}
          placeholder='phone number'
          inputFuncs={{
            onChange: handleTextChange,
            value: userInputs.phone,
          }}
        />
        <Input
          type='password'
          name='password'
          id='password'
          required={true}
          placeholder='password'
          inputFuncs={{
            onChange: handleTextChange,
            value: userInputs.password,
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
        <Button type='submit'> sign up</Button>
      </form>
    </FormView>
  );
};

export default SignupPage;
