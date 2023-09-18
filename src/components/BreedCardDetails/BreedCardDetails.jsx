import "./breedcarddetails.scss";
import React from "react";
export const BreedCardDetails = ({
  image,
  name,
  desc,
  temperament,
  origin,
  lifeSpan,
  characteristics,
}) => {
  return (
    <section className="breed-details">
      <div className="breed-details__box">
        <div className="breed-details__img">
          <img src={image.url} alt={name} />
        </div>
        <div className="breed-details__info">
          <div className="breed-details__name">{name}</div>
          <div className="breed-details__desc">{desc}</div>
          <div className="breed-details__temperament">
            <span>Temperament: </span>
            {temperament}
          </div>
          <div className="breed-details__origin">
            <span>Origin: </span>
            {origin}
          </div>
          <div className="breed-details__life-span">
            <span>Life Span: </span>
            {lifeSpan}
          </div>
          {characteristics.map((characteristic, index) => {
            return (
              <div key={index} className="breed-details__characteristic">
                <div className="breed-details__characteristic-title">
                  {Object.keys(characteristic)}:
                </div>
                <div className="breed-details__characteristic-rating">
                  <span
                    className={`breed-details__characteristic-${
                      Object.values(characteristic) >= 1 ? "filled" : "empty"
                    }`}
                  ></span>
                  <span
                    className={`breed-details__characteristic-${
                      Object.values(characteristic) >= 2 ? "filled" : "empty"
                    }`}
                  ></span>
                  <span
                    className={`breed-details__characteristic-${
                      Object.values(characteristic) >= 3 ? "filled" : "empty"
                    }`}
                  ></span>
                  <span
                    className={`breed-details__characteristic-${
                      Object.values(characteristic) >= 4 ? "filled" : "empty"
                    }`}
                  ></span>
                  <span
                    className={`breed-details__characteristic-${
                      Object.values(characteristic) >= 5 ? "filled" : "empty"
                    }`}
                  ></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BreedCardDetails;
