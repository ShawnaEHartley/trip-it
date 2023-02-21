import jwtFetch from "./jwt";


const RECEIVE_TRIP = trips/RECEIVE_TRIP; 
const RECEIVE_TRIPS = trips/RECEIVE_TRIPS; 
const REMOVE_TRIP = trips/REMOVE_TRIP;
const RECEIVE_TRIP_ERRORS = trips/RECEIVE_TRIP_ERRORS;
const CLEAR_TRIP_ERRORS = trips/CLEAR_TRIP_ERRORS;


const receiveTrip = (trip) => ({
    type: RECEIVE_TRIP, 
    trip 
})

const receiveTrips = (trips) => ({
    type: RECEIVE_TRIPS, 
    trips 
})

const removeTrip = (tripId) => ({
    type: REMOVE_TRIP, 
    tripId 
})

const receiveTripErrors = (errors) => ({
    type: RECEIVE_TRIP_ERRORS,
    errors 
})

const clearTripErrors = (errors) => ({
    type: CLEAR_TRIP_ERRORS,
    errors 
})

export const fetchTrips = (userId) => async (dispatch) => {
    try {
        const res = await jwtFetch(`/api/trips/user/${userId}`);
        const trips = await res.json(); 
        dispatch(receiveTrips(trips));
    } catch (err) {
        const resBody = await err.json(); 
        if (resBody.statusCode === 400) {
            dispatch(receiveTripErrors(resBody.errors));
        }
    }
};

export const fetchTrip = (tripId) => async (dispatch) => {
    try {
        const res = await jwtFetch(`/api/trips/${tripId}`)
        const trip = await res.json(); 
        dispatch(receiveTrip(trip)); 
    } catch (err) {
        const resBody = await err.json(); 
        if (resBody.statusCode === 400 ) {
            dispatch(receiveTripErrors(resBody.errors))
        }
    }
}


const createTrip = (trip) = async (dispatch) => {
    const res = 
}

const updateTrip = (tripId) = async (dispatch) => {

}

const deleteTrip = (tripId) = async (dispatch) => {

}