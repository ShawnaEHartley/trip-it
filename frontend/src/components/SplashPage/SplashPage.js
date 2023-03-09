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

                </div>
                <div id='center-right-splash'>
                    <div className='event-index'>
                        <h3>Debbie's Birthday Party</h3>
                        <div>New Canaan, CT</div>
                        <div>
                            Please arrive by noon, party starts at 2 and will have heavy snacks and cake. Will have non-alcoholic drinks, but if you want anything else, BYOB. Warren will be grilling for dinner so bring something to grill if you want to stay. Sides will be plenty and estimated 3 days before (based on likes). Excited to see you all to celebrate.
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>Amanda's flight details</h3>
                        <div>Dublin, IR</div>
                        <div>
                            if anyone wants to jump on the same flight, leaving JFK at 7:40 pm on American, arriving in Dublin (direct flight) at 6 am. I will rent a car and drive into the city to the Holiday Inn near the spire. 
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>rent jetskis</h3>
                        <div>Emerald Isle, NC</div>
                        <div>
                            watersports rental on the sound side of the island about a mile east of our house. Rentals are 3 hours long. 
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>Seven Lions at The Brooklyn Mirage</h3>
                        <div>New York, NY</div>
                        <div>
                            VIP tickets to Seven Lions. Will head to the Mirage around 10 pm after dinner. Get ready for a late night.
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>Sunrise horsebackriding</h3>
                        <div>Paros, GR</div>
                        <div>
                            Meet driver at hotel at 4:30, 20 minute ride to stables to be on the beach by 5:30. Make sure to wear closed toe shoes and long pants (preferably jeans). After we will grab breakfast in town and walk back to the hotel for a nap. 
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>Tandom Paragliding</h3>
                        <div>Northern Switzerland</div>
                        <div>
                            Little city between Munich and Zurich, there is a tandom paragliding place that we can stop for 3/4 hours and paraglide the hillside. Will split the cars via people who want to do this event.
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>Central Park Volleyball</h3>
                        <div>New York, NY</div>
                        <div>
                            Meet at 11 am to play a few games of volleyball. Depending on how many people want to play we can break and get lunch at Paris Baguette on the UES between games or after. Looking forward to seeing you all there. It's been too long.
                        </div>
                    </div>
                </div>
                <div id='right-splash'>
                    <div className='event-index'>
                        <h3>Game of Thrones walking tour</h3>
                        <div>Dubrvnik, CR</div>
                        <div>
                            Meet group at 11 am, walking tour around the walled city takes 3 hours, then a quick lunch break and then extended tour goes out to the gardens (Highgarden) - about a 30 minute bus ride (local city bus)
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>Ferry to Rotenest Island</h3>
                        <div>Perth, AUS</div>
                        <div>
                            Meet at Ferry terminal at Elizabeth Quay for 10:15 ferry to Rotenest. Lunch at the beachside cafe on the island. Then hike up to the lighthouse, quick swim in the moon shaped beach, then back to Perth for a shower and dinner.
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>Horseback through the Garden of the Gods</h3>
                        <div>Denver, CO</div>
                        <div>
                            Meet at stables at 9 am, setoff by 9:30 for a 3 hour walk through the garden of the gods on horseback. Wear closed toe shoes and jeans and a face mask or bandana for the dust. No experience necessary.
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>Beach day at Blue Ciele Resort</h3>
                        <div>Cartagena, Colombia</div>
                        <div>
                            Van will depart from central park outside walled city at 9:30 AM to drive to boat. Boat will take us to the resort with 2 complimetary drinks and al a carte cafe offerings. Will stay through dinner at the resort restaurant. After dinner we will take the boat to the bioluminescence bay on our way back to Cartagena. Bring a towel and water.
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>Dinner at Luna Rosa</h3>
                        <div>New York, NY</div>
                        <div>
                            Lets celebrate Robert's birthday with a wonderful italian dinner. The wine will flow and the pasta will be abundant. Make sure to get your like in 4 days in advance to be counted on the reservation.
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>Day in Santa Monica</h3>
                        <div>Los Angeles, CA</div>
                        <div>
                            Uber out to Elephante for brunch and then walk the beach and shop and just enjoy CA weather and culture! 
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>Dinner at Carmen</h3>
                        <div>Cartagena, Colombia</div>
                        <div>
                            One of the best dining experiences! Highly suggest the tasting menu! Reservation will be confirmed 4 days before.
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