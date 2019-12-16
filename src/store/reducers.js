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
    offset: 0,
    playStatus: Sound.status.PLAYING,
    votedOn: -1,
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
            state = { ...state,
                 song: action.payload.song,
                 channelId: action.payload.channelId,
                 offset: action.payload.offset
                };
            break;
        case SYNC_PACKET:
            /* attempt #1 : */
            /*let realOffset = action.payload.timecode + (Date.now() - (action.payload.timestamp + state.timeOffset));
            
            let sourceElapsed = Date.now() - state.startTime + action.payload.timecode;
            let sourceWrap = Math.abs(sourceElapsed % (state.duration));

            let time = Math.abs(realOffset - sourceWrap);
            
            state = { ...state, timecode: time };*/

            /* if that does not work well... */

            let realPos = action.payload.timecode + (Date.now() - (action.payload.timestamp + state.offset));

            state = { ...state, timecode: realPos };
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