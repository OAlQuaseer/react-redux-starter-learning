import React from "react";
import {NavLink} from "react-router-dom";
import {TabMenu} from "primereact/components/tabmenu/TabMenu";
import {Button} from 'primereact/components/button/Button';



const Header = ()=>{
  const activeStyle = {color:"blue"};
  const items=[
    {label: 'Tab1', icon: 'fa-bar-chart'},
    {label: 'Tab2', icon: 'fa-calendar'},
    {label: 'Tab3', icon: 'fa-book'},
    {label: 'Tab4', icon: 'fa-support'},
    {label: 'Tab5', icon: 'fa-twitter'},
    {label: 'Tab6', icon: 'fa-book'},
    {label: 'Tab7', icon: 'fa-support'},
    {label: 'Tab8', icon: 'fa-twitter'}
  ];
  return (
  <div>
    <TabMenu model={items}/>
    <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
    {' | '}
    <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
    {' | '}
    <NavLink to="/404" activeStyle={activeStyle}>Bad page</NavLink>
  </div>
  );
};

export default Header;
