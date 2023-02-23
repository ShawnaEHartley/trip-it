import React from 'react'; 
import { useHistory } from 'react-router-dom';
import TripShowPage from '../TripShowPage/TripShowPage';
import './TripIndex.css';


const TripIndexItem = ({trip, awsUrl}) => {
    const history = useHistory();

    const goToTripShow = (e) => {
        console.log("hello world")
        history.push(`/trips/${trip._id}`);
    }

    const date = () => {
        const newDate = new Date(trip.startDate)
        const month = newDate.getMonth() + 1;
        const year = newDate.getFullYear();
        const day = newDate.getDate();
        return (
            `${month}-${day}-${year}`
        )
    }

    return (
        <>
            <div id='stamp-image-container' onClick={goToTripShow}>
                <div className='stamp-image'>
                    <img className='stamp-image' src={awsUrl} alt='stamp' />
                </div>
                <div className='trip-info'>
                    <p>{trip.title}</p>
                    <p>{date()}</p>
                </div>
            </div>
            <div className='stamp-divider' />
        </>
    )

}

export default TripIndexItem;