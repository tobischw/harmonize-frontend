import settings from "./settings";
import sync from "./sync"
import { combineReducers } from "redux";

const reducers = combineReducers({
  settings
});

export default reducers;
