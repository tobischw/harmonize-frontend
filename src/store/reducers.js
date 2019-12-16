import { combineReducers } from "redux";
import { OPEN, CLOSE, MESSAGE } from "redux-websocket-bridge";
import Sound from "react-sound";

/* STATES */
const connectionState = {
    connected: false,
    clientId: -1
};

const syncState = {
    channelId: -1,
    timecode: 0,
    offset: 0,
    initialSync: false,
    playStatus: Sound.status.PLAYING,
    votedOn: -1,
    startTime: 0,
    votes: [],
    song: {
        title: "---",
        artist: "---",
        album: "---",
        source: null,
        art: ""
    }
};

/* CHANNELS */
const CHANNEL_INFO = "CHANNEL/INFO";
const SYNC_PACKET = "SYNC/PACKET";

function syncClient(state = syncState, action) {
    switch (action.type) {
        case CHANNEL_INFO:
            state = {
                ...state,
                song: action.payload.song,
                channelId: action.payload.channelId,
                offset: action.payload.offset,
                votes: action.payload.votes,
                startTime: Date.now()
            };
            break;
        case SYNC_PACKET:
            /* attempt #1 : */
            //let realOffset = action.payload.timecode + (Date.now() - (action.payload.timestamp + state.timeOffset));
            
            let pos = action.payload.timecode + (Date.now() - (action.payload.timestamp + state.offset));

            let sourceElapsed = Date.now() - state.startTime + pos;
            let sourceWrap = Math.abs(sourceElapsed % (state.song.duration));

            let offset = Math.abs(pos - sourceWrap);

            /* if that does not work well... */

            if(!state.initialSync || offset > 0.005) {
                console.log("SYNCED!");
                state = { ...state, timecode: pos, initialSync: true };
            }

            break;
    }
    return state;
}

function serverConnectivity(state = connectionState, action) {
    switch (action.type) {
        case `@@websocket/${OPEN}`:
            state = { ...state, connected: true };
            break;

        case `@@websocket/${CLOSE}`:
            state = { ...state, connected: false };
            break;

        case `@@websocket/${MESSAGE}`:
            break;

        default:
            break;
    }

    return state;
}

export default combineReducers({
    sync: syncClient,
    connection: serverConnectivity
});
