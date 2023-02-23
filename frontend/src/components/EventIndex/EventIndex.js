import React, { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import EventIndexItem from './EventsIndexItem';
import { fetchAllEvents, getEvents } from '../../store/events';
import * as eventActions from '../../store/events'; 
import './EventIndex.css'; 



const EventIndex = () => {
    const dispatch = useDispatch(); 
    const events = useSelector(getEvents);

    // const user = useSelector(state => state.session.user);
    
    useEffect(() => {
        dispatch(fetchAllEvents());
    }, [dispatch]);


    if (!events) {
        return (<div>...loading</div>)
    }

    console.log(events);
    return (
        <> 
            <div id='zig-zag11' className='pattern' />
            <div className='trip-show-page-container'>

                <div id='post-card-container'>
                    <div className='trip-show-page-header-wrapper'>
                        <div className='trip-show-page-header'>
                        </div>
                    </div>
                    <div id='top-body-border'>
                        <span>Events</span>
                        <span>Details</span>
                    </div>
                    <div id='post-card-body-container'>
                        <div className='post-card-space left-space'>
                            {events.map((event) => {
                                return (
                                    <EventIndexItem event={event} />
                                )
                            })}
                        </div>
                        <div id='post-card-center-border' />
                        <div className='post-card-space'>
                            <div id='info-container'>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='post-card-bottom'>
                    </div>
                </div>
            </div>
        </>

    )
};

export default EventIndex; 