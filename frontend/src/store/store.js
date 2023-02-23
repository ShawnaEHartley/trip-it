import { createStore, combineReducers, applyMiddleware, compose } from 'redux'; 
import thunk from 'redux-thunk'; 
import session from './session';
import errors from './errors';
import modal from './modal';
import trips from './trips';
import events from './events';

const appReducer = combineReducers({
    errors,
    modal, 
    trips,
    events,
    session
});

const rootReducer = (state, action) => {
    if (action.type === 'RECEIVE_USER_LOGOUT') {
        return appReducer(undefined, action);
    }
    return appReducer(state, action);
}

let enhancer; 

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default; 
    const composeEnhancers = 
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer)
};


export default configureStore; 