import { IconBar } from "../IconBar/IconBar";
import "./Footer.scss";

function Footer() {
  return (
    <nav className="footer-grid">
            <div className="col">
        <p className="band-name">Social Void</p>
      </div>
      <div className="col">
          <a className="email" href="mailto:socialvoidband@gmail.com">Send Us An Email</a>
      </div>


            <div className="col">       
        <IconBar width={30} height={30} className={""} />
        All Contents © Social Void
      </div>
    </nav>
  );
}

export default Footer;
