import "./mostpopularcard.scss";
export const MostPopularCard = ({ image, name, desc, index }) => {
  return (
    <>
      <div className="most-popular-breed">
        <div className="most-popular-breed-img">
          <img className="most-popular-breed-pic" src={image} alt={name} />
        </div>
        <div className="most-popular-breed__text">
          <h2 className="most-popular-breed__name">
            {index + 1}. {name}
          </h2>
          <p className="most-popular-breed__desc">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default MostPopularCard;
