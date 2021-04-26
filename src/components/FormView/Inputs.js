import React, { useRef, useState } from "react";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../Buttons/Buttons";

import "./FormView.css";

export const Input = ({
  type,
  name,
  id,
  required,
  placeholder,
  preInput,
  inputFuncs,
}) => {
  return (
    <div className="input-field">
      {preInput ? <span className="leading-text">{preInput}</span> : null}
      {type === "textarea" ? (
        <textarea
          name={name}
          id={id}
          required={required}
          {...inputFuncs}
          rows="5"
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          id={id}
          required={required}
          {...inputFuncs}
        />
      )}
      <label htmlFor={id} className="label">
        {placeholder}
      </label>
    </div>
  );
};

export const PinInput = ({
  name,
  inputFuncs: { pinDigits, handlePinInput, disabled },
}) => {
  const handleFocus = (e) => {
    e.target.select();

    const previousBox = e.target.previousElementSibling;
    const nextBox = e.target.nextElementSibling;

    // this is to avoid a forward box being filled first and a backward box being filled last
    if (previousBox && !previousBox.value) {
      previousBox.focus();
    } else if (nextBox && nextBox.value) {
      nextBox.focus();
    }
  };

  return (
    <div className="pin-input-field">
      {pinDigits.map((digit, index) => {
        return (
          <input
            type="password"
            name={name}
            key={index}
            maxLength="1"
            autoFocus={index === 0 ? true : false}
            required
            onChange={(e) => handlePinInput(e, index)}
            onFocus={handleFocus}
            value={digit}
            disabled={disabled}
          />
        );
      })}
    </div>
  );
};

export const SearchField = () => {
  return (
    <form className="search-field">
      <input
        type="text"
        name="search"
        placeholder="Search for a Pitch"
        id="search"
      />
      <Button>
        <FontAwesomeIcon icon={faSearch} />
      </Button>
    </form>
  );
};
