import React from 'react'
import { Link } from "react-router-dom";

export const NavLink = ({ children, to }) => {
  return (
    <Link to={to} className="nav-link"> 
      {children}
    </Link>
  )
}
