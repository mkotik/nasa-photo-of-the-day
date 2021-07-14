import React, { useState, useHook } from "react";
import logo from "./assets/nasaLogo.png";
import "./HeaderStyles.css";

function Header(props) {
  const { date } = props;
  return (
    <header className="header">
      <div className="logoBox">
        <img className="logo" src={logo}></img>
      </div>
      <div className="headerText">
        <h1 className="title">NASA | Daily Serving</h1>
        <h3 className="date">{date}</h3>
      </div>
    </header>
  );
}

export default Header;
