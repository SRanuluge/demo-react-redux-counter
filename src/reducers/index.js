import { combineReducers } from "redux";
import { countReducer } from "./countReducer";
import { logReducer } from "./logReducer";

export const  Reducer = combineReducers({
  countReducer,
  logReducer,
});
