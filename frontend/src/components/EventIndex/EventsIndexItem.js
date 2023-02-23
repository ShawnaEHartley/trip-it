import React from 'react'; 

import EventShowPage from '../EventShowPage/EventShowPage';

import './EventIndex.css'; 


const EventIndexItem = ({event}) => {

    const openEventShow = (e) => {
        e.preventDefault();
        // redirect to the event show page
        <EventShowPage />
    }
    
    return (
        <div onClick={openEventShow}>
            <ul>
                <li>{event.title} </li>
                <li>{event.startDate}</li>
                <li>{event.endDate}</li>
                <li>{event.peopleGoing.length()}</li>
            </ul>
        </div>
    )

}

export default EventIndexItem; 