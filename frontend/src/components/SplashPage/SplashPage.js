import React from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import TripIndex from '../TripIndex/TripIndex';
import MainPage from '../MainPage/MainPage'

import './SplashPage.css'; 



const SplashPage = () => {
    const dispatch = useDispatch();

    const loggedIn = useSelector(state => !!state.session.user);

    const showLogin = () => {
        dispatch({ type: 'modalOn', component: 'showLogin' })
    };

    if (!loggedIn) {

        return (
            // iterate through events here //
            <div id='splash-page-container'>
                <div id='tripit-container'>
                    <div id='tripit-logo' onClick={showLogin}>
                        Trip it
                    </div>
                </div>
                <div id='left-splash'>
                    <div className='event-index'>
                        <h3>Helicopter Statue of Liberty Tour</h3>
                        <div>New York, NY</div>
                        <div>
                            Via FlyNYC, helicopter ride departing from Hoboken to circle the statue of liberty a few times. Total time is 3 hours and returns to Hoboken. We can do lunch on the pier after.
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>Dinner at Quintonil</h3>
                        <div>Mexico City, MX</div>
                        <div>
                            The whole reason for this trip. Dinner will be a whole experience with 12 courses and vegetarian options. Reservation will be confirmed 3 days in advance. Get ready for a good meal on the best trip! 
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>Vatican City Tour</h3>
                        <div>Vatican City, IT</div>
                        <div>
                            Meet at the coffee shop around the corner from Pat's hotel to meet and walk over to the entrance. We will get skip the line tickets 4 days in advance, and spend the whole day wondering around the cathedrals. The pope has an address to the public this day, so we can stand in the back and watch. Will be done in time for dinner.
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>Waterfall Hike</h3>
                        <div>Ubud, Bali</div>
                        <div>
                            Car will pick us up at the hotel around 10AM and its a 2 hour drive to the waterfall. Quick hike down to the base. Hoping to get there before the crowds start to gather. Lunch will be near the waterfall and we should be back around 3 PM. Pack a change of clothes and towel and lots of water.
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>Lunch at The Crab Shack</h3>
                        <div>Montaug, NY</div>
                        <div>
                            Around our beach days, we can all gather together as a group for lunch. Plan for a few hours since there will be a lot of us. 
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>US National Whitewater Center</h3>
                        <div>Charlotte, NC</div>
                        <div>
                            Uber out to the WWC, about 30 minutes from the hotel, and get full day passes with whitewater rafting time in the early afernoon or right before lunch. Plan with a change of clothes - there is mountain biking, high ropes courses, rock walls, lots of hiking trails and of course, we will, as a group, raft around lunch at the cafe. Planning on a Thursday so we can stay for the band and sit by the beer garden. 
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>A Day on Rainy St</h3>
                        <div>Austin, TX</div>
                        <div>
                            Around 11 am we can head to Rainy together and bar hop.
                        </div>
                    </div>
                </div>
                <div id='center-left-splash'>
                <div className='event-index'>
                        <h3>Half Day out to Bainbridge</h3>
                        <div>Seattle, WA</div>
                        <div>
                            Ferry out to Bainbridge island to visit Christine and walk through the little main street. Have lunch out there and then take the ferry back to Seattle around sunset.
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>Skip the line at Buckingham Palace</h3>
                        <div>London</div>
                        <div>
                            Get skip the line tickets to tour through buckingham palace, specifically catching the changing of the guard. Then meet up with Andy for lunch near Hyde park.
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>Day Trip - Catamaran</h3>
                        <div>Oia, GR</div>
                        <div>
                            max 16 people, captain Max, one skipper. will leave ferry terminal around 10 am, lunch is included, and will be fish and fruit that the captain caught the day before. bring extra water, wine will also be provided
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>Friends Experience</h3>
                        <div>New York, NY</div>
                        <div>
                            Tickets allow entry at a specific time, looking at after lunch so about 3pm, takes about 2 hours to go through, can meet up at the end for a coffee at Central Perk.
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>Pool Day at Marina Bay Sands</h3>
                        <div>Singapore</div>
                        <div>
                            One full day with cabana rental at the rooftop pool of the Marina Bay Sands. Infinity pool and swin up bar. Open bar plus lunch included in cabana rental. Al a carte menu at cafe for additional snacks. Opens at 9 am - sunset.
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>Dinner at Carbone</h3>
                        <div>New York, NY</div>
                        <div>
                            Have had this reservation option for a year! Lets take advantage of it! Dinner for the first 4 to like this event. 
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>Debbie's Birthday Party</h3>
                        <div>New Canaan, CT</div>
                        <div>
                            Please arrive by noon, party starts at 2 and will have heavy snacks and cake. Will have non-alcoholic drinks, but if you want anything else, BYOB. Warren will be grilling for dinner so bring something to grill if you want to stay. Sides will be plenty and estimated 3 days before (based on likes). Excited to see you all to celebrate.
                        </div>
                    </div>
                </div>
                <div id='center-right-splash'>
                <div className='event-index'>
                        <h3>example</h3>
                        <div>city, state</div>
                        <div>
                            description
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>example</h3>
                        <div>city, state</div>
                        <div>
                            description
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>example</h3>
                        <div>city, state</div>
                        <div>
                            description
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>example</h3>
                        <div>city, state</div>
                        <div>
                            description
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>example</h3>
                        <div>city, state</div>
                        <div>
                            description
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>example</h3>
                        <div>city, state</div>
                        <div>
                            description
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>example</h3>
                        <div>city, state</div>
                        <div>
                            description
                        </div>
                    </div>
                </div>
                <div id='right-splash'>
                <div className='event-index'>
                        <h3>example</h3>
                        <div>city, state</div>
                        <div>
                            description
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>example</h3>
                        <div>city, state</div>
                        <div>
                            description
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>example</h3>
                        <div>city, state</div>
                        <div>
                            description
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>example</h3>
                        <div>city, state</div>
                        <div>
                            description
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>example</h3>
                        <div>city, state</div>
                        <div>
                            description
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>example</h3>
                        <div>city, state</div>
                        <div>
                            description
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>example</h3>
                        <div>city, state</div>
                        <div>
                            description
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return <TripIndex />
    }
};

export default SplashPage;