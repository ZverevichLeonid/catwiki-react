import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchBreedsData = createAsyncThunk(
  "breeds/fetchBreedsData",
  async function () {
    const response = await fetch("https://api.thecatapi.com/v1/breeds", {
      headers: {
        "x-api-key":
          "live_wYttEEHwc4mwESYYVWqZ4mlRFNGMji101ytMXlrOlztAP6k3KfwMEaLiMGk6iO7z",
      },
    });
    const data = await response.json();
    const transformedData = await data.map((breed) => ({
      name: breed.name,
      id: breed.id,
      image: breed.image?.url || "",
      description: breed.description,
    }));
    return transformedData;
  }
);

const BreedsSlice = createSlice({
  name: "breeds",
  initialState: {
    breeds: [],
    mostPopularBreeds: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchBreedsData.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchBreedsData.fulfilled]: (state, action) => {
      (state.staus = "resolved"), (state.breeds = action.payload);
    },
    [fetchBreedsData.rejected]: (state, action) => {},
  },
});

export const { createMostPopularBreeds } = BreedsSlice.actions;
export default BreedsSlice.reducer;
