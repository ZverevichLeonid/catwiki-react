import "./subhero.scss";
import { useSelector } from "react-redux";
import BreedCard from "./BreedCard/BreedCard";
export const SubHero = () => {
  const breedsData = useSelector((state) => state.breeds.breeds);
  const breedsForShowData = [
    { ...breedsData[0] },
    { ...breedsData[4] },
    { ...breedsData[8] },
    { ...breedsData[20] },
  ];
  return (
    <section className="sub-hero">
      <div className="sub-hero__box">
        <div className="sub-hero__desc">
          <h2>Most Searched Breeds</h2>
        </div>
        <div className="sub-hero__title">
          <h2>66+ Breeds For you to discover</h2>
        </div>
        <div className="sub-hero__cards">
          {breedsForShowData.map((breed) => {
            return (
              breedsData.length > 0 && (
                <BreedCard
                  key={breed.id}
                  name={breed.name}
                  image={breed.image}
                />
              )
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SubHero;
