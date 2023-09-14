import { configureStore } from "@reduxjs/toolkit";
import BreedsSlice from "./BreedsSlice";
export default configureStore({
  reducer: {
    breeds: BreedsSlice,
  },
});
