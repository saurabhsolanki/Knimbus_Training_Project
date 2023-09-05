import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./Auth/Auth.Reducer";
import { ProductReducer } from "./Products/Product.Reducer";
import { E_LibraryReducer } from "./E-library/E_library.Reducer";


const root = combineReducers({
  auth:AuthReducer,
  product:ProductReducer,
  eLibrary:E_LibraryReducer
  });
export const store= legacy_createStore(root,applyMiddleware(thunk))