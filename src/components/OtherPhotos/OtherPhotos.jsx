import "./otherphotos.scss";
import React from "react";
export const OtherPhotos = ({ breedImages }) => {
  console.log(breedImages);
  return (
    <div className="other-photos">
      <h3 className="other-photos__title">Other photos</h3>
      <div className="other-photos__grid">
        {breedImages.map((image) => {
          return (
            <img
              key={image.id}
              src={image?.url}
              className="other-photo__img"
            ></img>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(OtherPhotos);
