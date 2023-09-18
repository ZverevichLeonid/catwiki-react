import "./breedcard.scss";
import { Link } from "react-router-dom";
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
