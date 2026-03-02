import { useState } from "react";
import HamburgerMenuIcon from "../../Assets/Icons/HamburgerMenuIcon.svg";
import "./Navbar.scss";
import { IconBar } from "../IconBar/IconBar";
function Navbar() {
  const [hideLinks, setHideLinks] = useState(true);
  const classString = "nav-link";
  return (
    <nav className="top-nav">
      <ul>
        <li className="hamburger-menu-container">
          <a className="hamburger-menu-title">
            <p className="band-name">Social Void</p>
          </a>
          <a>
            <img
            className={`hamburger-menu-icon ${hideLinks ? "" : "active"}`}
              src={HamburgerMenuIcon}
              onClick={() => setHideLinks(!hideLinks)}
            ></img>
          </a>
        </li>
        <li className={`${classString} ${hideLinks ? "hide-link" : ""}`}>
          <a
            className="nav-link-anchor"
            href="#Listen"
          >
            LISTEN
          </a>
        </li>
        <li className={`${classString} ${hideLinks ? "hide-link" : ""}`}>
          <a
            className="nav-link-anchor"
            href="#Watch"
          >
            WATCH
          </a>
        </li>
        <li className={`${classString} ${hideLinks ? "hide-link" : ""}`}>
          <a
            className="nav-link-anchor"
            href="#Merch"
          >
            MERCH
          </a>
        </li>
        <li className={`${classString} ${hideLinks ? "hide-link" : ""}`}>
          <a
            className="nav-link-anchor"
            href="#Tour"
          >
            TOUR
          </a>
        </li>
        <li className={`${classString} ${hideLinks ? "hide-link" : ""}`}>
          <IconBar className={"small-icon-bar"} width={30} height={30} />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
