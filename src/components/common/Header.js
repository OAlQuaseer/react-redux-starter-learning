import React from "react";
import {NavLink} from "react-router-dom";



const Header = ()=>{
  const activeStyle = {color:"blue"};
  return (
  <div>
    <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
    {' | '}
    <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
    {' | '}
    <NavLink to="/404" activeStyle={activeStyle}>Bad page</NavLink>
  </div>
  );
};

export default Header;
