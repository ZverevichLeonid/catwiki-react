import { useEffect } from "react";
import { fetchBreedsData } from "./store/BreedsSlice.js";
import { useDispatch } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import { lazy } from "react";
import { Suspense } from "react";
const BreedPage = lazy(() =>
  import("./components/Pages/BreedPage/BreedPage.jsx")
);
const MostPopular = lazy(() =>
  import("./components/Pages/MostPopular/MostPopular.jsx")
);
const Home = lazy(() => import("./components/Pages/Home/Home.jsx"));
const Wrapper = lazy(() => import("./components/Wrapper/Wrapper.jsx"));

import Loader from "./components/Loader/Loader.jsx";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBreedsData());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Wrapper>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/most-popular-breeds" element={<MostPopular />} />
          <Route path="/breed/:name" element={<BreedPage />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Wrapper>
    </Suspense>
  );
}

export default App;
