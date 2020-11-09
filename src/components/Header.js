import React from "react";
import "../styles/Header.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import IconButton from "@material-ui/core/IconButton";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <AccountCircleIcon className="header__icon" fontSize="large" />
      </IconButton>
      <img
        className="header__logo"
        src="../tinder-logo.png"
        alt="tinder-logo"
      />
      <IconButton>
        <FormatAlignLeftIcon className="header__icon" fontSize="large" />
      </IconButton>
    </div>
  );
}
export default Header;
