import HorizontalBanner from "../../Assets/HorizontalBanner.png";
import BandImage from "../../Assets/BandImage.png"
import "./Hero.scss"
export const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-container">
                <img className="hero-img horizontal"
alt="The five members of Social Void standing in front of a pink wall."                    
                    src={HorizontalBanner}
                ></img>
                <img className="hero-img vertical"
alt="The five members of Social Void standing in front of a brick wall."                    src={BandImage}
                ></img>
            </div>
        </div>
    );
}