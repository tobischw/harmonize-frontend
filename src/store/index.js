import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import ReduxWebSocketBridge from 'redux-websocket-bridge';

import rootReducer from "./reducers";

export default createStore(
    rootReducer, 
    applyMiddleware(ReduxWebSocketBridge('ws://localhost:8080/'), logger)
);
