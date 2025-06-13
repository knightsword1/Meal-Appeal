import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// *  import cartReducer is from "export default cartSlice.reducer";

const appStore = configureStore({
  //* the reducer is for the appStore and it contains reducers for its slices;
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
