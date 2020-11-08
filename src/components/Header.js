import React from "react";
import "../styles/Header.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";

function Header() {
  return (
    <div className="header">
      <AccountCircleIcon className="header__icon" fontSize="large" />
      <img
        className="header__logo"
        src="../tinder-logo.png"
        alt="tinder-logo"
      />
      <FormatAlignLeftIcon className="header__icon" fontSize="large" />
    </div>
  );
}

export default Header;
