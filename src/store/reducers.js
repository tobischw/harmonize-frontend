import { combineReducers } from 'redux'
import { OPEN, CLOSE, MESSAGE } from 'redux-websocket-bridge';

const initState = {
    connected: false
}

const SERVER_GREETING = 'SERVER_GREETING';

function syncClient(state = initState, action) {
    switch(action.type) {
        case SERVER_GREETING:
            console.log("Received greeting");
            return state;
    }
    return state;
}

function serverConnectivity(state = initState, action) {
    switch (action.type) {
        case `@@websocket/${ OPEN }`:
            console.log("ws open");
            state = { ...state, connected: true };
            break;
    
        case `@@websocket/${ CLOSE }`:
            console.log("ws close");
            state = { ...state, connected: false };
            break;
    
        case `@@websocket/${ MESSAGE }`:
            console.log("ws message");
            break;
    
        default: break;
    }
   
    return state;
}

export default combineReducers({
    syncClient,
    serverConnectivity
});