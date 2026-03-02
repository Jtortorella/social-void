import HorizontalBanner from "../../Assets/HorizontalBanner.png";
import "./Hero.scss"
export const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-container">
                <img className="hero-img"
                    src={HorizontalBanner}
                ></img>
            </div>
        </div>
    );
}