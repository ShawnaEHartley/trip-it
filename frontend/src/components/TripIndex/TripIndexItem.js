import React from 'react'; 
import './TripIndex.css';
import { useDispatch } from 'react-redux';


const TripIndexItem = ({trip}) => {
    console.log(trip.organizer);
    return (
        <ul>
            <li>{trip.title}</li>
            <li>{trip.startDate}</li>
            {/* <li>{trip.members.length}</li> */}

        </ul>
    )

}

export default TripIndexItem;