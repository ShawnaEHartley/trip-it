import React from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import TripIndexItem from './TripIndexItem';
import { useEffect } from 'react';
import * as tripActions from '../../store/trips';


const TripIndex = () => {
    const dispatch = useDispatch(); 
    const trips = useSelector()

    useEffect(() => {
        dispatch(tripActions.fetchUserTrips())
    })


    return (
        <div>
            
        </div>

    )
}

export default TripIndex
