import Home from "./components/Pages/Home/Home.jsx";
import Wrapper from "./components/Wrapper/Wrapper.jsx";
import { useEffect } from "react";
import { fetchBreedsData } from "./store/BreedsSlice.js";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBreedsData());
  }, [dispatch]);

  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
}

export default App;
