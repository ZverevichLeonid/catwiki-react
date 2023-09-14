import "./inputfield.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export const InputField = () => {
  const allBreeds = useSelector((state) => state.breeds.breeds);
  const [inputBreed, setInputBreed] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [foundBreeds, setFoundBreeds] = useState([]);
  useEffect(() => {
    setFoundBreeds([...allBreeds]);
  }, [allBreeds]);
  function searchHandler(event) {
    const keyword = event.target.value;
    if (keyword !== "") {
      const results = allBreeds.filter((breed) =>
        breed.name.toLowerCase().startsWith(keyword.toLowerCase())
      );
      setFoundBreeds(results);
    } else {
      setFoundBreeds(allBreeds);
    }
    setInputBreed(keyword);
  }
  const displayBreeds = foundBreeds.map((breed) => {
    return <li key={breed.id}>{breed.name}</li>;
  });

  return (
    <div className="input-field">
      <input
        value={inputBreed}
        onChange={(e) => searchHandler(e)}
        className="input"
        onClick={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        placeholder="Enter your breed"
        type="text"
      />
      <AiOutlineSearch size={30} className="input-icon" />
      {isFocus && (
        <div className="breeds">
          <ul>
            {(foundBreeds && foundBreeds.length > 0 && displayBreeds) || (
              <li>No results found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InputField;
