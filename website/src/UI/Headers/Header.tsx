import type { HeaderProps } from "./HeaderInterface";
import "./Header.scss";
function Header(props: HeaderProps) {
  return (
    <>
      <div className="header-container" id={props.HeaderName}>
        <h1 className="header">{props.HeaderName}</h1>
      </div>
    </>
  );
}

export default Header;
