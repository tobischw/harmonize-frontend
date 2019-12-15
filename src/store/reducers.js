import { combineReducers } from 'redux'
import { OPEN, CLOSE, MESSAGE } from 'redux-websocket-bridge';

const connectionState = {
    connected: false,
    clientId: -1
};

const syncState = {
    timecode: 0,
    song: {
        title: "---",
        artist: "---",
        source: null,
        art: ""
    }
}

const CHANNEL_INFO = 'CHANNEL/INFO';
const SYNC_PACKET = 'SYNC/PACKET';

function syncClient(state = syncState, action) {
    switch(action.type) {
        case CHANNEL_INFO:
            state = { ...state, song: action.payload.song };
            break;
        case SYNC_PACKET:
            state = { ...state, timecode: action.payload.timecode };
            break;
    }
    return state;
}

function serverConnectivity(state = connectionState, action) {
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
    sync: syncClient,
    connection: serverConnectivity
});