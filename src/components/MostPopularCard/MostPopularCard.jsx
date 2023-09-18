import "./mostpopularcard.scss";
import { Link } from "react-router-dom";
export const MostPopularCard = ({ image, name, desc, index, slug, id }) => {
  return (
    <>
      <div className="most-popular-breed">
        <Link state={{ id: id }} to={`/breed/${slug}`}>
          <div className="most-popular-breed-img">
            <img className="most-popular-breed-pic" src={image} alt={name} />
          </div>
        </Link>
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
