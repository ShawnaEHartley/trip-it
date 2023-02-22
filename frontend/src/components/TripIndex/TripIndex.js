import React from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import TripIndexItem from './TripIndexItem';
import { useEffect } from 'react';
import * as tripActions from '../../store/trips';
import './TripIndex.css';


const TripIndex = () => {
    const dispatch = useDispatch(); 
    const trips = useSelector(tripActions.getTrips)
    const user = useSelector(state => state.session.user)

    // useEffect(() => {
    //     dispatch(tripActions.fetchUserTrips(user._id))
    // }, [dispatch, user._id])

    useEffect(() => {
        dispatch(tripActions.fetchAllTrips())
    }, [dispatch, user._id])

    if (!trips[0]) {
        return (
            <div></div>
        )
    }

    return (
        trips[0].map((trip) => {
            return (
                <div>
                    <TripIndexItem trip={trip} />
                </div>
            )
        })

    )
};

export default TripIndex;
