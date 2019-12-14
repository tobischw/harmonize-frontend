import { combineReducers } from 'redux'
import {
  CONNECT_SERVER
} from './actions'

const initState = {
    isConnected: false
}

export default function reducer(state = initState, action) {
    switch(action.type) {
        case CONNECT_SERVER:
            console.log("Action type CONNECT_SERVER");
            return state;
    }
}