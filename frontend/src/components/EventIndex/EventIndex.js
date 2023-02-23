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

    if (!events[0]) {
        return (<div>...loading</div>)
    }

    return (
        <div>
            {events.map((event) => {
                return (
                    <EventIndexItem event={event} />
                )
            })}
        </div>

    )
};

export default EventIndex; 