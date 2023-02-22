import { combineReducers } from "redux";
import { sessionErrorsReducer } from './session';
import { tripErrorsReducer } from "./trips";
import { eventErrorsReducer } from "./events";

export default combineReducers({
    sessionErrorsReducer,
    tripErrorsReducer,
    eventErrorsReducer
});