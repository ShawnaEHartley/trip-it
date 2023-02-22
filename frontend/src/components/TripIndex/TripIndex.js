import React from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import TripIndexItem from './TripIndexItem';
import { useEffect } from 'react';
import * as tripActions from '../../store/trips';
import './TripIndex.css';

import './TripIndex.css'


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
        <>
            <div id='zig-zag11' className='pattern' />
            <div id='main-page-container'>
                <div id='page'>
                    <div id='stamp-page-container'>
                        <div id='stamp-page-header'>
                            <h2>Trip Collection</h2>
                            <p>Shawna Hartley</p>
                        </div>
                        <div className='stamp-container'>
                            <div className='stamp'>
                                <div className='link-replacement'>
                                    Trip name <br />
                                    Date and time <br />
                                    Friends
                                </div>
                            </div>
                            <div className='stamp-divider' />
                            <div className='stamp'>
                                <div className='link-replacement'>
                                    Trip name <br />
                                    Date and time <br />
                                    Friends
                                </div>
                            </div>
                            <div className='stamp-divider' />
                            <div className='stamp'>
                                <div className='link-replacement'>
                                    Trip name <br />
                                    Date and time <br />
                                    Friends
                                </div>
                            </div>
                            <div className='stamp-divider' />
                        </div>
                        <div className='stamp-container'>

                        </div>
                        <div className='stamp-container'>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default TripIndex;
