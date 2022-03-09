import { configureStore } from "@reduxjs/toolkit";
import { EdvoraApi } from "../services/api";

export default configureStore({
  reducer: {
    [EdvoraApi.reducerPath]: EdvoraApi.reducer,
  },
});
