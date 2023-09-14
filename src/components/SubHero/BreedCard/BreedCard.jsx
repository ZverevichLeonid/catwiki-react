import "./breedcard.scss";
export const BreedCard = ({ name, image }) => {
  return (
    <div className="breed-card">
      <img className="breed-card__img" src={image} alt={name} />
      <div className="breed-card__name">{name}</div>
    </div>
  );
};

export default BreedCard;
