import React from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as eventActions from '../../store/events'; 
import './Events.css'; 
import EventIndexItem from './EventIndexItem'; 


const EventIndex = () => {
    
    return (
        <>
        <div>IM THE EVENT INDEX</div>
        <div> <EventIndexItem  event={event} /> </div>
        </>
    )

}

export default EventIndex; 