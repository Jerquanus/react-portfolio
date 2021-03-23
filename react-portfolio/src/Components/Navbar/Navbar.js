import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

function Navbar() {

  const activeStyle = {
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 800
  }

  const links = [
    {
      to: '/home',
      innerHTML: 'Home'
    },
    {
      to: '/about',
      innerHTML: 'About'
    },
    {
      to: '/projects',
      innerHTML: 'Projects'
    },
    {
      to: '/resume',
      innerHTML: 'Resume'
    },
    {
      to: '/contact',
      innerHTML: 'Contact'
    }
  ]

  const linkMap = links.map((el, index)=> {
    return (
      <NavLink key={index} to={el.to} activeStyle={activeStyle}>{el.innerHTML}</NavLink>
    )
  })

  return (
    <div className="nav">
      {linkMap}
    </div>  
  );
}
export default Navbar;