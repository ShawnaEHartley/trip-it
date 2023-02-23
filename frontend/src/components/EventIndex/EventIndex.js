import React, { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import EventIndexItem from './EventsIndexItem'; 
import * as eventActions from '../../store/events'; 
import './EventIndex.css'; 


const EventIndex = () => {

    const dispatch = useDispatch(); 
    const events = useSelector(eventActions.getEvents);
    const user = useSelector(state => state.session.user);
    
    useEffect(() => {
        dispatch(eventActions.fetchAllEvents())
    }, [dispatch]);

    console.log(events)

    if (!events[0]) {
        return (<div>...loading</div>)
    }

    return (
        <div>
            {events[0].map((event) => {
                return (
                    <EventIndexItem event={event} />
                )
            })}
        </div>

    )
};

export default EventIndex; 