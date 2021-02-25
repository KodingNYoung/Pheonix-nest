import React from 'react'
import { Link } from "react-router-dom";

export const NavLink = ({ children, to, className }) => {
  return (
    <Link to={to} className={`nav-link ${className}`}> 
      {children}
    </Link>
  )
}
