import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { useSelector } from "react-redux";
import { mostPopularBreedsIds } from "../../../MostPopularBreedsList";
import { useEffect, useState } from "react";
import "./mostpopular.scss";
import MostPopularCard from "../../MostPopularCard/MostPopularCard";
export const MostPopular = () => {
  const allBreadsData = useSelector((state) => state.breeds.breeds);
  const [mostPopularBreedsList, setMostPopularBreedsList] = useState([]);
  useEffect(() => {
    let tempArr = [];
    for (let i = 0; i < mostPopularBreedsIds.length; i++) {
      let breed = allBreadsData.filter(
        (breed) => mostPopularBreedsIds[i] === breed.id
      );
      tempArr = [...tempArr, ...breed];
    }
    setMostPopularBreedsList([...tempArr]);
  }, [allBreadsData]);

  return (
    <>
      <Header />
      <section className="most-popular-breeds">
        <div className="most-popular-breeds__title">
          <h1>Top 10 most searched breeds</h1>
        </div>
        <div className="most-popular-breeds__list">
          {mostPopularBreedsList.length > 0 &&
            mostPopularBreedsList.map((breed, index) => (
              <MostPopularCard
                index={index}
                key={breed.id}
                image={breed.image}
                name={breed.name}
                desc={breed.description}
              />
            ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MostPopular;
