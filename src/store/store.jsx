import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../reducer/ProductReducer";
import UserReducer from "../reducer/UserReducer";

export default configureStore({
  reducer: {
    UserReducer: UserReducer,
    ProductReducer: ProductReducer,
  },
});
