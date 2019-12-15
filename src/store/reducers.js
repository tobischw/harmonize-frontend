import { combineReducers } from 'redux'
import { OPEN, CLOSE, MESSAGE } from 'redux-websocket-bridge';
import Sound from "react-sound"

/* STATES */
const connectionState = {
    connected: false,
    clientId: -1
};

const syncState = {
    channelId: -1,
    timecode: 0,
    playStatus: Sound.status.PLAYING,
    song: {
        title: "---",
        artist: "---",
        album: "---",
        source: null,
        art: ""
    }
}

/* CHANNELS */
const CHANNEL_INFO = 'CHANNEL/INFO';
const SYNC_PACKET = 'SYNC/PACKET';

function syncClient(state = syncState, action) {
    switch(action.type) {
        case CHANNEL_INFO:
            console.log("RECEIVED CHANNEL INFO");
            state = { ...state, song: action.payload.song, channelId: action.payload.channelId };
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
            state = { ...state, connected: true };
            break;
    
        case `@@websocket/${ CLOSE }`:
            state = { ...state, connected: false };
            break;
    
        case `@@websocket/${ MESSAGE }`:
            break;
    
        default: break;
    }
   
    return state;
}

export default combineReducers({
    sync: syncClient,
    connection: serverConnectivity
});