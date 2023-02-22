import React from 'react'; 
import './TripIndex.css';
import { useDispatch } from 'react-redux';


const TripIndexItem = ({trip, awsUrl}) => {
    console.log(trip.organizer);
    return (
        <>
            <div id='stamp-image-container'>
                <div className='stamp-image'>
                    <img className='stamp-image' src={awsUrl} />
                </div>
                <div className='trip-info'>{trip.title}</div>
            </div>
        </>
    )

}

export default TripIndexItem;