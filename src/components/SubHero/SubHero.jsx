import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { mostPopularBreedsIds } from "../../MostPopularBreedsList/index";
import BreedCard from "./BreedCard/BreedCard";
import "./subhero.scss";

export const SubHero = () => {
  const breedsData = useSelector((state) => state.breeds.breeds);
  const [breedsForShowData, setBreedsForShowData] = useState([]);
  useEffect(() => {
    let tempArr = [];
    if (breedsData.length > 0) {
      for (let i = 0; i < 4; i++) {
        let breed = breedsData.filter(
          (breed) => mostPopularBreedsIds[i] === breed.id
        );
        tempArr = [...tempArr, ...breed];
      }
      setBreedsForShowData([...tempArr]);
    }
  }, [breedsData]);
  return (
    <section className="sub-hero">
      <div className="sub-hero__box">
        <div className="sub-hero__desc">
          <h2>Most Searched Breeds</h2>
        </div>
        <div className="sub-hero__title">
          <h2>66+ Breeds For you to discover</h2>
          <span>
            <Link to={"/most-popular-breeds"}>
              SEE MORE <HiOutlineArrowNarrowRight />
            </Link>
          </span>
        </div>
        <div className="sub-hero__cards">
          {breedsForShowData.map((breed) => {
            return (
              breedsData.length > 0 && (
                <BreedCard
                  key={breed.id}
                  id={breed.id}
                  name={breed.name}
                  image={breed.image}
                  slug={breed.slug}
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
