import React from 'react'
import './FormView.css'


export const Input = ({type, name, id, required, placeholder}) => {
  return (
    <div className='input-field'>
      <input type={type} name={name} id={id} required={required}/>
      <label htmlFor={id} className='label'>
        {placeholder}
      </label>
    </div>
  );
}

export const Button = ({type, children}) => {
  return (
    <button type={type} className='submit-btn'>
      {children}
    </button>
  );
}