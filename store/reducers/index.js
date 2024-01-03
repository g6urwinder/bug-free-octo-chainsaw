import { combineReducers } from "redux";
import sampleReducer from "./sampleReducer";
import { counterReducer } from "./counter";

import { cartReducer } from "./cart";

export default combineReducers({
    sampleData: sampleReducer,
    counterReducer: counterReducer,
    cartReducer: cartReducer
});
