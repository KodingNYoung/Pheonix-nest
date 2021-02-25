import React from "react";
import FormView from "../../components/FormView/FormView";
import { ReactComponent as WelcomeSVG } from "../../assets/svg/welcome.svg";
import { Anchor } from "../../components/Navs/Links";

import "./SuccessfulSignup.css";

const SuccessfulSignup = () => {
  return (
    <div className='successful-signup'>
      <div className='lg-screen-disp'>
        <FormView>
          <div>
            <h2>Welcome Teekay,</h2>
            <span>We can't wait to hear what you have</span>
          </div>
          <div className='svg-container'>
            <WelcomeSVG />
            <span>
              Congratulations, your account have been created successfully.
              Setup your profile to make your pitch and find people to help
            </span>
          </div>

          <Anchor className='red-bg-link'>proceed</Anchor>
        </FormView>
      </div>
      <div className='sm-screen-disp'>
        <div>
          <h2>Welcome Teekay,</h2>
          <span>We can't wait to hear what you have</span>
        </div>
        <div className='svg-container'>
          <WelcomeSVG />
          <span>
            Congratulations, your account have been created successfully. Setup
            your profile to make your pitch and find people to help
          </span>
        </div>
        <Anchor className='red-bg-link'>proceed</Anchor>
      </div>
    </div>
  );
};

export default SuccessfulSignup;
