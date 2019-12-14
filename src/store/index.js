import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./reducers";
import reduxWebsocket from '@giantmachines/redux-websocket';

// Create the middleware instance for web sockets.
const reduxWebsocketMiddleware = reduxWebsocket();

export default createStore(rootReducer, applyMiddleware(reduxWebsocketMiddleware, logger));
