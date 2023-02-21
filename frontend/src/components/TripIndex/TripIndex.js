import React from 'react'; 
import { useDispatch } from 'react-redux';
import TripIndexItem from './TripIndexItem';
import { useEffect } from 'react';
import * as tripActions from '../../store/trips';


const TripIndex = () => {
    const dispatch = useDispatch(); 

    useEffect(() => {
        dispatch(tripActions.fetchUserTrips())
    })


    return (
        <div>
            
        </div>

    )
}

export default TripIndex
