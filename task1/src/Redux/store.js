import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./Auth/Auth.Reducer";


const root = combineReducers({
  auth:AuthReducer
  });
export const store= legacy_createStore(root,applyMiddleware(thunk))