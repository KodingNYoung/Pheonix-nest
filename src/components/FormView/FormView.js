import React from "react";
import { Logo, Brand } from "../Logo/Logo";

// css
import "./FormView.css";

const FormView = ({ children }) => {
  return (
    <div className="form-page">
      <header>
        {/* <Logo className="form-logo" />
        <h1>Phoenix Nest</h1> */}
        <Brand />
      </header>
      <main className="form-main">{children}</main>
    </div>
  );
};

export default FormView;
