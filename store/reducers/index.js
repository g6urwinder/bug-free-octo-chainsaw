import { combineReducers } from "redux";
import sampleReducer from "./sampleReducer";
import { counterReducer } from "./counter";

export default combineReducers({
  sampleData: sampleReducer,
  counterReducer: counterReducer,
});
