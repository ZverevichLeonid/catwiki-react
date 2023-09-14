import "./haveacat.scss";
import imgFirst from "../../assets/image1.png";
import imgSecond from "../../assets/image2.png";
import imgThird from "../../assets/image3.png";

export const HaveAcat = ({}) => {
  return (
    <section className="have-a-cat">
      <div className="have-a-cat__box">
        <div className="have-a-cat__left">
          <div className="have-a-cat__title">
            <h3>Why should you have a cat?</h3>
          </div>
          <div className="have-a-cat__desc">
            <p>
              Having a cat around you can actually trigger the release of
              calming chemicals in your body which lower your stress and anxiety
              leves
            </p>
          </div>
        </div>
        <div className="have-a-cat__right">
          <div className="have-a-cat__grid">
            <img
              className="have-a-cat__grid-img-1"
              src={imgFirst}
              alt="cat paw"
            />
            <img
              className="have-a-cat__grid-img-2"
              src={imgSecond}
              alt="sleepy cat"
            />
            <img
              className="have-a-cat__grid-img-3"
              src={imgThird}
              alt="cat in prison"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HaveAcat;
