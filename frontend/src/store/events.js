import jwtFetch from "./jwt";
import { fetchTrip } from "./trips";
import { closeModal } from "./modal";

const RECEIVE_EVENT = "events/RECEIVE_EVENT"; 
const RECEIVE_EVENTS = "events/RECEIVE_EVENTS"; 
const REMOVE_EVENT = "events/REMOVE_EVENT"; 
const RECEIVE_EVENT_ERRORS = "events/RECEIVE_EVENT_ERRORS"; 
const CLEAR_EVENT_ERRORS = "events/CLEAR_EVENT_ERRORS"; 


const receiveEvent = (event) => ({
    type: RECEIVE_EVENT, 
    event 
}); 

const receiveEvents = (events) => ({
    type: RECEIVE_EVENTS, 
    events 
}); 

const removeEvent = (eventId) => ({
    type: REMOVE_EVENT, 
    eventId
});

const receiveEventErrors = (errors) => ({
    type: RECEIVE_EVENT_ERRORS, 
    errors 
});

const clearEventErrors = (errors) => ({
    type: CLEAR_EVENT_ERRORS, 
    errors 
});

export const getEvents = (state) => {
    if (state.events) {
        return Object.values(state.events)
    } else {
        return []
    }
};

// export const getEvent = (state) => (eventId) => {
//     if (state.events) {
//         return state.events[eventId]
//     } else {
//         return null
//     }
// };

export const getEvent = (state) => {
    if (state.events) {
        return state.events
    } else {
        return null
    }
};

export const fetchAllEvents = () => async (dispatch) => {
    try {
        const res = await jwtFetch('/api/events/');
        const events = await res.json();
        dispatch(receiveEvents(events))
    } catch(err) {
        const resBody = await err.json(); 
        if (resBody.statusCode === 400) {
            dispatch(receiveEventErrors(resBody.errors));
        }
    }
};

export const fetchTripEvents = (tripId) => async (dispatch) => {
    try { 
        const res = await jwtFetch(`/api/events/trips/${tripId}`); 
        const events = await res.json();
        dispatch(receiveEvents(events))
    } catch(err) {
        const resBody = await err.json(); 
        if (resBody.statusCode === 400) {
            dispatch(receiveEventErrors(resBody.errors)); 
        }
    }
}; 

export const fetchEvent = (eventId) => async (dispatch) => {
    try {
        const res = await jwtFetch(`/api/events/${eventId}`)
        const event = await res.json(); 
        dispatch(receiveEvent(event)); 
    } catch (err) {
        const resBody = await err.json(); 
        if (resBody.statusCode === 400) {
            dispatch(receiveEventErrors(resBody.errors))
        }
    }
};

export const createEvent = (eventObject, tripId, history) => async (dispatch) => {
    try {
        const res = await jwtFetch(`/api/events/${tripId}`, {
            method: "POST", 
            body: JSON.stringify(eventObject)
        });
        const event = await res.json();

        dispatch(closeModal());
        await dispatch(receiveEvent(event));
        history.push(`/events/${event._id}`);
    } catch(err) {
        const resBody = await err.json(); 
        if (resBody.statusCode === 400) {
            return dispatch(receiveEventErrors(resBody.errors))
        }
    }
}; 

export const updateEvent = (eventObj, eventId) => async (dispatch) => {
    try {
        const res = await jwtFetch(`/api/events/${eventId}`, {
            method: "PATCH", 
            body: JSON.stringify(eventObj)
        }); 
        const event = await res.json(); 
        dispatch(receiveEvent(event));
    } catch(err) {
        const resBody = await err.json(); 
        if (resBody.statusCode === 400) {
            return dispatch(receiveEventErrors(resBody.errors))
        }
    }
};


export const addUserToEvent = (eventId, userId) => async (dispatch) => {
    try {
        const res = await jwtFetch(`/api/events/addMember/${eventId}/${userId}`, {
            method: "PATCH"
        })
        const event = await res.json(); 
        dispatch(receiveEvent(event))
    } catch(err) {
        const resBody = await err.json(); 
        if (resBody.statusCode === 400) {
            return dispatch(receiveEventErrors(resBody.errors))
        }
    }
};


export const removeUserFromEvent = (eventId, userId) => async (dispatch) => {
    try {
        const res = await jwtFetch(`/api/events/remove/${eventId}/${userId}`, {
            method: "PATCH"
        })
        const event = await res.json();
        dispatch(receiveEvent(event))
    } catch(err) {
        const resBody = await err.json();
        if (resBody.statusCode === 400) {
            dispatch(receiveEventErrors(resBody.errors));
        }
    }
};


export const deleteEvent = (eventId) => async (dispatch) => {
    await jwtFetch(`/api/events/${eventId}`, {
        method: "DELETE"
    })
    return dispatch(removeEvent(eventId))
};


const nullErrors = null; 

export const eventErrorsReducer = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_EVENT_ERRORS: 
            return action.errors; 
        case CLEAR_EVENT_ERRORS: 
            return nullErrors; 
        default: 
            return state;
    }
};


const EventsReducer = (state = {}, action) => {
    let newState = { ...state }

    switch(action.type) {
        case RECEIVE_EVENT: 
            return action.event;
        case RECEIVE_EVENTS:
            return action.events;
        case REMOVE_EVENT:
            // delete(newState[action.eventId]);
            return {};
        default: 
            return newState;
    }
};


export default EventsReducer; 