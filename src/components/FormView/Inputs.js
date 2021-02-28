import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./FormView.css";

export const Input = ({ type, name, id, required, placeholder, inputFuncs }) => {
  return (
    <div className='input-field'>
      <input type={type} name={name} id={id} required={required} {...inputFuncs}/>
      <label htmlFor={id} className='label'>
        {placeholder}
      </label>
    </div>
  );
};

export const Button = ({ type, children }) => {
  return (
    <button type={type} className='submit-btn'>
      {children}
    </button>
  );
};

export const SearchField = () => {
  return (
    <form className='search-field'>
      <input
        type='text'
        name='search'
        placeholder='Search for a Pitch'
        id='search'
      />
      <button>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};
