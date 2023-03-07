import React, { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import EventIndexItem from './EventsIndexItem';
import { fetchTripEvents, getEvents } from '../../store/events';
import * as eventActions from '../../store/events'; 
import './EventIndex.css'; 

const EventIndex = ({tripId}) => {
    const dispatch = useDispatch(); 
    const events = useSelector(getEvents);
    // const user = useSelector(state => state.session.user);
    
    useEffect(() => {
        dispatch(fetchTripEvents(tripId));
    }, [dispatch, tripId]);

    const renderCreateEvent = e => {
        dispatch({type:'modalOn', component: 'createEvent'})
    }

    if (!events[0]?._id) {
        return (<button onClick={renderCreateEvent}>Create your first event</button>)
    } else {
        return (
            <>
                {events.map((event) => {
                    return (
                        <EventIndexItem event={event} />
                    )
                })}
            </>
        )
    }
};

export default EventIndex; 