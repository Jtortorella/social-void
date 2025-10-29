import { useState } from "react";
import HamburgerMenuIcon from "../../Assets/Icons/HamburgerMenuIcon.svg";
import "./Navbar.scss";
function Navbar() {
  const [hideLinks, setHideLinks] = useState(true);
  const classString = "nav-link";
  return (
    <nav className="top-nav">
      <ul>
        <li className="hamburger-menu-container">
          <a className="hamburger-menu-title hamburger-menu-item">
            Social Void
          </a>
          <a>
            <img
              className="hamburger-menu-icon hamburger-menu-item"
              src={HamburgerMenuIcon}
              onClick={() => setHideLinks(!hideLinks)}
            ></img>
          </a>
        </li>
        <li>
          <a
            className={`${classString} ${hideLinks ? "hide-link" : ""}`}
            href="#Listen"
          >
            LISTEN
          </a>
        </li>
        <li>
          <a
            className={`${classString} ${hideLinks ? "hide-link" : ""}`}
            href="#Watch"
          >
            WATCH
          </a>
        </li>
        <li>
          <a
            className={`${classString + " title "} ${
              hideLinks ? "hide-link" : ""
            }`}
            href="#Home"
          >
            SOCIAL VOID
          </a>
        </li>
        <li>
          <a
            className={`${classString} ${hideLinks ? "hide-link" : ""}`}
            href="#Merch"
          >
            MERCH
          </a>
        </li>
        <li>
          <a
            className={`${classString} ${hideLinks ? "hide-link" : ""}`}
            href="#Tour"
          >
            TOUR
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
