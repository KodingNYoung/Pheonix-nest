import React from "react";
import FormView from "../../components/FormView/FormView";
import { ReactComponent as EmailSVG } from "../../assets/svg/mail.svg";
import { Anchor } from "../../components/Navs/Links";

import "./EmailConfirmation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const EmailConfirmation = () => {
  return (
    <div className='email-confirmation'>
      <div className='lg-screen-disp'>
        <FormView>
          <div className='heading'>
            <h1>Hello, Teekay</h1>
            <span>It's nice to meet you.</span>
          </div>
          <div className='svg-container'>
            <EmailSVG />
          </div>
          <h3>Confirm your email address</h3>
          <p className='email-text'>
            <span>We sent a confirmation email to </span>
            <span className='email'>teekaymedia@gmail.com</span>
            <span>
              Check your email and click on the confirmation link to continue
            </span>
          </p>
          <button className='resend-mail'>Resend email</button>
          <Anchor to='/signup/code-verification' className='next-page'>
            <span>Next Page</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </Anchor>
        </FormView>
      </div>
      <div className='sm-screen-disp'>
        <div className='heading'>
          <h1>Hello, Teekay</h1>
          <span>It's nice to meet you.</span>
        </div>
        <div className='svg-container'>
          <EmailSVG />
        </div>
        <h3>Confirm your email address</h3>
        <p className='email-text'>
          <span>We sent a confirmation email to </span>
          <span className='email'>teekaymedia@gmail.com</span>
          <span>
            Check your email and click on the confirmation link to continue
          </span>
        </p>
        <button className='resend-mail'>Resend email</button>
        <Anchor to='/signup/code-verification' className='next-page'>
          <span>Next Page</span>
          <FontAwesomeIcon icon={faChevronRight} />
        </Anchor>
      </div>
    </div>
  );
};

export default EmailConfirmation;
