import { combineReducers } from "redux";
import recipesReducer from "./recipesReducer";
import specialsReducer from "./specialsReducer";

export default combineReducers({
    recipesData: recipesReducer,
    specialsData: specialsReducer
});