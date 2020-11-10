import React from "react";
import "../styles/Header.css";
import { Link, useHistory } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function Header({ backButton }) {
  const history = useHistory();

  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIcon className="header__icon" fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
          <AccountCircleIcon className="header__icon" fontSize="large" />
        </IconButton>
      )}
      <Link to="/">
        <img
          className="header__logo"
          src="../tinder-logo.png"
          alt="tinder-logo"
        />
      </Link>
      <Link to="/chat">
        <IconButton>
          <FormatAlignLeftIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}
export default Header;
