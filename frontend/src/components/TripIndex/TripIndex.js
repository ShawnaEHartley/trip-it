import React, { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import TripIndexItem from './TripIndexItem';
import { fetchUserTrips, getTrips } from '../../store/trips';

import './TripIndex.css';


const TripIndex = () => {
    const dispatch = useDispatch();
    const trips = useSelector(getTrips);
    const user = useSelector(state => state.session.user);

    let awsUrls = ['https://tripit-seeds.s3.amazonaws.com/stamps/stamp_3.png',
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
        dispatch(fetchUserTrips(user._id))
    }, [dispatch, user._id]);

    if (!trips[0]) {
        return (
            <div></div>
        )
    }

    console.log(trips)
    
    // const EndTrip = () => {
    //     return (
    //         <div id='stamp-image-container'>
    //             <div className='stamp-image'>
    //                 <img className='stamp-image' src={randUrls[trips.length - 1]} />
    //             </div>
    //             <div className='trip-info'>{trips.slice(trips.length - 1)[0].title}</div>
    //         </div>
    //     )
    // }

    const randUrls = [];
    while (awsUrls.length) {
        let rand = Math.floor(Math.random() * awsUrls.length);
        randUrls.push(awsUrls.slice(rand, rand + 1));
        awsUrls = awsUrls.slice(0, rand).concat(awsUrls.slice(rand + 1));
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
                            {trips.map((trip, i) => 
                                <TripIndexItem 
                                    key={i} 
                                    trip={trip} 
                                    awsUrl={randUrls[i]} 
                                />
                            )}
                        </div>
                        <div className='stamp-container'>
                        </div>
                        <div className='stamp-container'>
                        </div>
                        <div className='stamp-container'>
                        </div>
                        <div className='stamp-container'>
                        </div>
                        <div className='stamp-container'>
                        </div>
                        <div id='end-stamp-container' className='stamp-container'>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default TripIndex;
