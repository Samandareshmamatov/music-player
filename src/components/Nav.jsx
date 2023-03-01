import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faMusic,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import MainLogo from "../imgs/main-logo.svg";

const Nav = ({ buttonRef, libraryStatus, setLibraryStatus, dark, setDark }) => {

  return (
    <nav>
      <div className="nav-left">
        <img src={MainLogo} alt="" />
        <h1 className={"nav-title" + (dark ? " " : " light-theme-color")}>
          Music Player
        </h1>
      </div>
      <div className="nav-right">
        <div onClick={() => setDark(!dark)}>
          {dark ? (
            <FontAwesomeIcon className="sun-icon" icon={faSun} />
          ) : (
            <FontAwesomeIcon className="moon-icon" icon={faMoon} />
          )}
        </div>
        <button
          ref={buttonRef}
          id="nav-button"
          className={`${dark ? "white-color" : "light-theme-color"}`}
          onClick={() => setLibraryStatus(!libraryStatus)}
        >
          <span className="hidden-lib">Library</span>
          <FontAwesomeIcon icon={faMusic} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
