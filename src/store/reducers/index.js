import settings from "./settings";
import client from "./client"
import { combineReducers } from "redux";

const reducers = combineReducers({
  settings,
  client
});

export default reducers;
