import React from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as eventActions from '../../store/events'; 
import './Events.css'; 
import EventIndexItem from './EventIndexItem'; 


const EventIndex = () => {

    const dispatch = useDispatch(); 
    const events = useSelector(eventActions.getEvents);

    useEffect(() => {
        dispatch(eventActions.fetchTripEvents(tripId))
    }, [dispatch, tripId]);

    if (!events) {
        return (
            <div></div>
        )
    }
    
    return (

        events.map((event) => {
            return <EventIndexItem  event={event} />
        })
   
    )

}

export default EventIndex; 