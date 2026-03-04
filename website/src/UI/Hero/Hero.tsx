import HorizontalBanner from "../../Assets/HorizontalBanner.png";
import BandImage from "../../Assets/BandImage.png"
import "./Hero.scss"
export const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-container">
                <img className="hero-img horizontal"
                    alt="Image of Social Void's members. Social void is an art rock band from Charleston, SC. Band is pictured in front of concrete wall with ivy in the top left corner."
                    src={HorizontalBanner}
                ></img>
                <img className="hero-img vertical"
                    alt="Image of Social Void's members. Social void is an art rock band from Charleston, SC. Each member is pictured individually in front of a pink wall spearated by a black border."
                    src={BandImage}
                ></img>
            </div>
        </div>
    );
}