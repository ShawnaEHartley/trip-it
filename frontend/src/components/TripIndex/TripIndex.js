import React, { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

import TripIndexItem from './TripIndexItem';
import * as tripActions from '../../store/trips';

import './TripIndex.css';


const TripIndex = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const trips = useSelector(tripActions.getTrips)
    const user = useSelector(state => state.session.user)

    const awsUrls = ['https://tripit-seeds.s3.amazonaws.com/stamps/stamp_3.png',
                    'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_5.png',
                    'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_6.png',
                    'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_7.png',
                    'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_9.png',
                    'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_10.png',
                    'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_11.png',
                    'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_12.png',
                    'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_17.png',
                    'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_18.png',
                    'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_20.png',
                    'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_21.png',
                    'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_22.png',
                    'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_23.png',
                    'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_24.png',
                    'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_25.png',
                    'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_26.png',
                    'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_27.png']


    useEffect(() => {
        dispatch(tripActions.fetchAllTrips())
    }, [dispatch]);

    if (!trips[0]) {
        return (
            <div></div>
        )
    };

    return (
        <>
            <div id='zig-zag11' className='pattern' />
            <div id='main-page-container'>
                <div id='page'>
                    <div id='stamp-page-container'>
                        <div id='stamp-page-header'>
                            <h2>Trip Collection</h2>
                            <p>{user.name}</p>
                        </div>
                        <div className='stamp-container'>
                            {/* <div className='stamp'>
                                <div className='link-replacement'>
                                    Trip name <br />
                                    Date and time <br />
                                    Friends
                                </div>
                            </div> */}
                            {trips.map((trip, i) => {
                                return <div className="tripIndexItem-wrapper">
                                    <div className='stamp-divider' />
                                    <TripIndexItem trip={trip} awsUrl={awsUrls[i]} />
                                </div>
                            })}
                            {/* <div className='stamp-divider' />
                            <div onClick={clickCheck}>
                                <TripIndexItem trip={trips[0]} awsUrl={awsUrls[0]} />
                            </div>

                            <div className='stamp-divider' />
                            <img className='stamp-image' src={awsUrls[1]} alt='stamp' />
                            <div className='stamp-divider' />
                            <img className='stamp-image' src={awsUrls[0]} alt='stamp' />

                        </div>
                        <div className='stamp-container'>

                        </div>
                        {/* <div className='stamp-container'>

                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
};

export default TripIndex;
