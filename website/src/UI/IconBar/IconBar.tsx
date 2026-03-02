import BandcampIcon from "../../Assets/Icons/BandcampIcon.svg";
import FaceBookIcon from "../../Assets/Icons/FaceBookIcon.svg";
import InstagramIcon from "../../Assets/Icons/InstagramIcon.svg";
import SpotifyIcon from "../../Assets/Icons/SpotifyIcon.svg";
import YoutubeIcon from "../../Assets/Icons/YoutubeIcon.svg";
import "./IconBar.scss"
interface IconSize {
    className: string,
    width: number,
    height: number
}

export const IconBar = (props: IconSize) => {
    return (
        <ul className={`icon-grid ${props.className}`}>
            <li>
                <a className="icon-link" href="https://open.spotify.com/artist/1ZxPQKtHcZ3Jc8pWhZkdTc" aria-label="Spotify icon link">
                    <img className="icon-link-img"
                        style={{width: props.width, height: props.height}}
                    src={SpotifyIcon} />
                </a>
            </li>
            <li>
                <a className="icon-link" href="https://www.instagram.com/socialvoid/" aria-label="Instagram icon link">
                    <img className="icon-link-img"
                                            style={{width: props.width, height: props.height}}
 src={InstagramIcon} />
                </a>
            </li>
            <li>
                <a className="icon-link" href="https://www.facebook.com/socialvoidband/" aria-label="Facebook icon link">
                    <img className="icon-link-img"
                                            style={{width: props.width, height: props.height}}
src={FaceBookIcon} />
                </a>
            </li>
            <li>
                <a className="icon-link" href="https://socialvoid.bandcamp.com/" aria-label="Bandcamp icon link">
                    <img className="icon-link-img" 
                                            style={{width: props.width, height: props.height}}
 src={BandcampIcon} />
                </a>
            </li>
            <li>
                <a className="icon-link" href="https://www.youtube.com/@socialvoid" aria-label="Youtube icon link">
                    <img className="icon-link-img"                         style={{width: props.width, height: props.height}}
 src={YoutubeIcon} />
                </a>
            </li>
        </ul>
    )
}