import React from "react";
import { Logo } from "../../components/Logo/Logo";

// router
import { useHistory } from "react-router-dom";

// css
import "./SignupPage.css";

// components
import FormView from "../../components/FormView/FormView";
import { Input, Button } from "../../components/FormView/Inputs";
import {Anchor} from '../../components/Navs/Links'
const SignupPage = () => {
  const history = useHistory();

  const handleUserSignup = () => {
    // validaete then use history.psuh
    history.push("/home");
  };

  return (
    <FormView>
      <h2>sign up</h2>
      <form
        className='signup-form'
        onSubmit={handleUserSignup}
        autoComplete={false}
      >
        <p className='sub-heading'>Please fill in the details requested</p>
        <Input
          type='text'
          name='fullname'
          id='fullname'
          required={true}
          placeholder='fullname'
        />
        <Input
          type='text'
          name='email'
          id='email'
          required={true}
          placeholder='email'
        />
        <Input
          type='tel'
          name='phone'
          id='phone'
          required={true}
          placeholder='phone number'
        />
        <Input
          type='password'
          name='password'
          id='password'
          required={true}
          placeholder='password'
        />
        <Input
          type='password'
          name='confirm-password'
          id='confirm-password'
          required={true}
          placeholder='confirm password'
        />
        <p className='warning'>
          By signing in you agree to the{" "}
          <Anchor className='transparent-link'> Terms and conditions</Anchor> of
          the organisation
        </p>
        <Button type='submit'> sign up</Button>
      </form>
    </FormView>
  );
};

export default SignupPage;
