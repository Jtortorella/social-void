import "./Footer.scss";
import BandcampIcon from "../../Assets/Icons/BandcampIcon.svg";
import FaceBookIcon from "../../Assets/Icons/FaceBookIcon.svg";
import InstagramIcon from "../../Assets/Icons/InstagramIcon.svg";
import SpotifyIcon from "../../Assets/Icons/SpotifyIcon.svg";
import YoutubeIcon from "../../Assets/Icons/YoutubeIcon.svg";

function Footer() {
  return (
    <nav className="footer">
      <ul>
        <li>
          <a className="footer-link email">SOCIALVOIDBAND@GMAIL.COM</a>
        </li>
        <br/>
        <hr/>
        <li>
          <a className="footer-link" aria-label="Spotify icon link">
            <img src={SpotifyIcon} />
          </a>
        </li>
        <li>
          <a className="footer-link" aria-label="Instagram icon link">
            <img src={InstagramIcon} />
          </a>
        </li>
        <li>
          <a className="footer-link" aria-label="Facebook icon link">
            <img src={FaceBookIcon} />
          </a>
        </li>
        <li>
          <a className="footer-link" aria-label="Bandcamp icon link">
            <img src={BandcampIcon} />
          </a>
        </li>
        <li>
          <a className="footer-link" aria-label="Youtube icon link">
            <img src={YoutubeIcon} />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Footer;
