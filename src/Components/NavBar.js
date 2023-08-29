import React from "react";
import { ReactComponent as Logo } from "../assets/siteLogo.svg";
import MenuList from "./MenuList";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <div className="logo-icon">
          <Logo />
        </div>
        <div className="logo-text">E-COMM</div>
      </div>
      <div className="menu-conatiner">
        <MenuList />
      </div>
    </div>
  );
};
export default NavBar;
