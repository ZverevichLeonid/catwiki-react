import { Link } from "react-router-dom";
import "./breedcard.scss";

export const BreedCard = ({ name, image, slug, id }) => {
  return (
    <Link state={{ id: id }} to={`/breed/${slug}`}>
      <div className="breed-card">
        <img className="breed-card__img" src={image} alt={name} />
        <div className="breed-card__name">{name}</div>
      </div>
    </Link>
  );
};

export default BreedCard;
