import Home from "./components/Pages/Home/Home.jsx";
import MostPopular from "./components/Pages/MostPopular/MostPopular.jsx";
import Wrapper from "./components/Wrapper/Wrapper.jsx";
import { useEffect } from "react";
import { fetchBreedsData } from "./store/BreedsSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBreedsData());
  }, [dispatch]);

  return (
    <Wrapper>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/most-popular-breeds" element={<MostPopular />} />
        <Route path="/breed" element={""} />
      </Routes>
    </Wrapper>
  );
}

export default App;
