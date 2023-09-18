import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import BreedCardDetails from "../../BreedCardDetails/BreedCardDetails";
import OtherPhotos from "../../OtherPhotos/OtherPhotos";
export const BreedPage = () => {
  let { name } = useParams();
  const [breed, setBreed] = useState();
  const [breedImages, setBreedImages] = useState([]);
  const [characteristics, setCharacteristics] = useState([]);
  const allBreadsData = useSelector((state) => state.breeds.breedsAllInfo);

  useEffect(() => {
    let tempBreed = allBreadsData.find((element) => {
      if (name === element.slug) return true;
    });
    setBreed(tempBreed);
  }, [name, allBreadsData]);

  useEffect(() => {
    const setDataCharacteristics = () => {
      let tempCharacteristics = [];
      tempCharacteristics.push({ Adaptability: breed.adaptability });
      tempCharacteristics.push({ "Affection Level": breed.affection_level });
      tempCharacteristics.push({ "Child Friendly": breed.child_friendly });
      tempCharacteristics.push({ "Dog Friendly": breed.dog_friendly });
      tempCharacteristics.push({ Grooming: breed.grooming });
      tempCharacteristics.push({ Intelligence: breed.intelligence });
      tempCharacteristics.push({ "Social Needs": breed.social_needs });
      tempCharacteristics.push({
        "Stranger Friendly": breed.stranger_friendly,
      });
      setCharacteristics(tempCharacteristics);
    };
    if (breed) setDataCharacteristics();
  }, [breed]);

  useEffect(() => {
    async function fetchImages() {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?size=small&limit=8&breed_id=${breed.id}`,
        {
          headers: {
            "x-api-key":
              "live_wYttEEHwc4mwESYYVWqZ4mlRFNGMji101ytMXlrOlztAP6k3KfwMEaLiMGk6iO7z",
          },
        }
      );
      const data = await response.json();
      setBreedImages(data);
    }
    if (breed) fetchImages();
  }, [breed]);
  return (
    <>
      <Header />
      {breed && (
        <BreedCardDetails
          name={breed.name}
          image={breed.image}
          desc={breed.description}
          temperament={breed.temperament}
          origin={breed.origin}
          lifeSpan={breed.life_span}
          characteristics={characteristics}
        />
      )}
      {breedImages && <OtherPhotos breedImages={breedImages} />}
      <Footer />
    </>
  );
};

export default BreedPage;
