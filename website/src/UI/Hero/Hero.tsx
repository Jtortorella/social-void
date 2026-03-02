import HorizontalBanner from "../../Assets/HorizontalBanner.png";
import BandImage from "../../Assets/BandImage.png"
import "./Hero.scss"
export const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-container">
                <img className="hero-img horizontal"
                    src={HorizontalBanner}
                ></img>
                <img className="hero-img vertical"
                    src={BandImage}
                ></img>
            </div>
        </div>
    );
}