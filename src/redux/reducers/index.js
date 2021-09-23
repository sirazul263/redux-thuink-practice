import { combineReducers } from "redux";
import { productReducer, selectedProductReducers } from "./productReducers";

export const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducers,
});
