import React from "react";
import {
  WiMoonAltWaningCrescent6,
  WiMoonAltWaxingCrescent1
} from "react-icons/wi";

function NavBar({ toggleDarkMode, darkMode }) {
  return (
    <div className="nav-bar">
      <div className="title">oblivia.</div>
      <div className="theme-toggle" onClick={toggleDarkMode}>
        {darkMode ? <WiMoonAltWaningCrescent6 /> : <WiMoonAltWaxingCrescent1 />}
      </div>
    </div>
  );
}

export default NavBar;
