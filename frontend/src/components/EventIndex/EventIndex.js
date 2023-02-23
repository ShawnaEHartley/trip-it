import React, { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import EventIndexItem from './EventsIndexItem';
import { fetchAllEvents, getEvents } from '../../store/events';
import * as eventActions from '../../store/events'; 
import './EventIndex.css'; 



const EventIndex = () => {
    const dispatch = useDispatch(); 
    const events = useSelector(getEvents);

    // const user = useSelector(state => state.session.user);
    
    useEffect(() => {
        dispatch(fetchAllEvents());
    }, [dispatch]);


    if (!events) {
        return (<div>...loading</div>)
    }

    console.log(events);
    return (
        <>
            {events.map((event) => {
                return (
                    <EventIndexItem event={event} />
                )
            })}
        </>
    )
};

export default EventIndex; 