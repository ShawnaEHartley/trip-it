import React from 'react'; 

import TripShowPage from '../TripShowPage/TripShowPage';

import './TripIndex.css';


const TripIndexItem = ({trip, awsUrl}) => {
    
    const goToTripShow = (e) => {
        e.preventDefault();
        // redirect to the trip show page
        <TripShowPage />
    }

    return (
        <>
            <div id='stamp-image-container' onClick={goToTripShow}>
                <div className='stamp-image'>
                    <img className='stamp-image' src={awsUrl} alt='stamp' />
                </div>
                <div className='trip-info'>{trip.title}</div>
            </div>
            <div className='stamp-divider' />
        </>
    )

}

export default TripIndexItem;