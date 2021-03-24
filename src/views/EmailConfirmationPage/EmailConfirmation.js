import React, { useEffect, useState } from "react";
import FormView from "../../components/FormView/FormView";
import { ReactComponent as EmailSVG } from "../../assets/svg/mail.svg";

import "./EmailConfirmation.css";

const EmailConfirmation = ({
  location: {
    state: { userData },
  },
}) => {
  const [user, setUser] = useState({
    fullname: "",
    email: "",
  });

  useEffect(() => {
    setUser(userData);
  }, [userData]);

  return (
    <div className="email-confirmation">
      <div className="lg-screen-disp">
        <FormView>
          <div className="heading">
            <h1>Hello, {user.fullname}</h1>
            <span>It's nice to meet you.</span>
          </div>
          <div className="svg-container">
            <EmailSVG />
          </div>
          <h3>Confirm your email address</h3>
          <p className="email-text">
            <span>We sent a confirmation email to </span>
            <span className="email">{user.email}</span>
            <span>
              Check your email and click on the confirmation link to continue
            </span>
          </p>
          <button className="resend-mail">Resend email</button>
        </FormView>
      </div>
      <div className="sm-screen-disp">
        <div className="heading">
          <h1>Hello, {user.fullname}</h1>
          <span>It's nice to meet you.</span>
        </div>
        <div className="svg-container">
          <EmailSVG />
        </div>
        <h3>Confirm your email address</h3>
        <p className="email-text">
          <span>We sent a confirmation email to </span>
          <span className="email">{user.email}</span>
          <span>
            Check your email and click on the confirmation link to continue
          </span>
        </p>
        <button className="resend-mail">Resend email</button>
      </div>
    </div>
  );
};

export default EmailConfirmation;
