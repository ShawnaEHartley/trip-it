import React from 'react'; 
import './TripIndex.css';


const TripIndexItem = ({trip}) => {

    return (
        <ul>
            <li>{trip.title}</li>
            <li>{trip.startDate}</li>
            {/* <li>{trip.members.length}</li> */}

        </ul>
    )

}

export default TripIndexItem;