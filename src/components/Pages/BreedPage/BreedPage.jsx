import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Suspense } from "react";
import { lazy } from "react";
import Loader from "../../Loader/Loader";
const Footer = lazy(() => import("../../Footer/Footer"));
const Header = lazy(() => import("../../Header/Header"));
const BreedCardDetails = lazy(() =>
  import("../../BreedCardDetails/BreedCardDetails")
);
const OtherPhotos = lazy(() => import("../../OtherPhotos/OtherPhotos"));
export const BreedPage = () => {
  let { name } = useParams();
  const [breed, setBreed] = useState();
  const [breedImages, setBreedImages] = useState([]);
  const [characteristics, setCharacteristics] = useState([]);
  const allBreadsData = useSelector((state) => state.breeds.breedsAllInfo);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        `https://api.thecatapi.com/v1/images/search?size=small&include_breeds=false&limit=8&breed_id=${breed.id}`,
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
      <Suspense fallback={<Loader />}>
        {breed && breedImages && (
          <>
            <Header />
            <BreedCardDetails
              name={breed?.name}
              image={breed?.image}
              desc={breed?.description}
              temperament={breed?.temperament}
              origin={breed?.origin}
              lifeSpan={breed?.life_span}
              characteristics={characteristics}
            />
            <OtherPhotos breedImages={breedImages} />
            <Footer />
          </>
        )}
      </Suspense>
    </>
  );
};

export default BreedPage;
