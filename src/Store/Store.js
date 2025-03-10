import { configureStore } from "@reduxjs/toolkit";
import slice from "./Slice.js";

const store = configureStore({
  reducer: {
    SingleSourceOfTruthSlice: slice,
  },
});

export default store;
