import { useState } from "react";
import { IconBar } from "../IconBar/IconBar";
import "./Footer.scss";

function Footer() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  return (
    <nav className="footer-grid">
      <div className="col">
        <h1 className="band-name">Social Void</h1>
      </div>
      <div className="col">
        <a className="button" href="mailto:socialvoidband@gmail.com">
          Send Us An Email
        </a>
      </div>
      <div className="col">
        <IconBar width={30} height={30} className={""} />
        <button
          onClick={() => setShowPrivacyPolicy(!showPrivacyPolicy)}
          className="button"
        >
          Privacy Policy
        </button>
      </div>
      
      <dialog id="privacy-policy" open={showPrivacyPolicy}>
        <button id="close-button" onClick={() => setShowPrivacyPolicy(!showPrivacyPolicy)}>
          X
        </button>
        <section id="privacy-policy-content">
  <h2>Privacy Policy for Social Void</h2>
  <p><strong>Last Updated:</strong> March 4, 2026</p>

  <p>
 
    We use third-party services that may drop cookies on your browser to provide the following features:
  </p>

  <ul>
    <li>
      <strong>Spotify & Bandcamp:</strong> Used for music streaming and digital sales. 
      They may track listening habits and account sessions.
    </li>
    <li>
      <strong>YouTube:</strong> Used for music videos. We use "Privacy-Enhanced Mode" 
      to limit tracking until playback.
    </li>
    <li>
      <strong>Seated:</strong> Used for tour dates and ticketing. Cookies manage 
      checkout sessions and location-based alerts.
    </li>
    <li>
      <strong>Google Analytics:</strong> Collects anonymized data (browser type, page visits) 
      to help us understand our audience.
    </li>
  </ul>

  <p>
    <strong>Your Choices:</strong> You can block cookies in your browser settings, 
    but doing so may break some features on the page.
  </p>
</section>
      </dialog>
    </nav>
  );
}

export default Footer;