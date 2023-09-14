import Logo from "../Logo/Logo";
import mobileIMG from "../../assets/HeroImagesm.png";
import tabletIMG from "../../assets/HeroImagemd.png";
import desktopIMG from "../../assets/HeroImagelg.png";
import "./hero.scss";
import InputField from "../InputField/InputField";
export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__box">
        <picture className="hero__bg">
          <source media="(max-width:479px)" srcSet={mobileIMG} />
          <source media="(max-width:991px)" srcSet={tabletIMG} />
          <img className="hero__img" src={desktopIMG} alt="catwiki logo" />
        </picture>
        <div className="hero__text">
          <Logo width={"287"} height={"87"} fill={"#ffffff"} />
          <h1 className="hero__title">Get to know more about your cat breed</h1>
          <InputField />
        </div>
      </div>
    </section>
  );
};

export default Hero;
