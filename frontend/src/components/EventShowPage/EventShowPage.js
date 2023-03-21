import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import EventUpdateForm from '../EventsUpdateForm/EventsUpdateForm';
import * as eventActions from '../../store/events';
import { closeModal } from '../../store/modal';

import emptyHeart from '../../assets/images/icons8-favorite-96.png';
import heart from '../../assets/images/icons8-love-96.png'

import './EventShowPage.css'



const EventShowPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { eventId } = useParams();
  const event = useSelector(eventActions.getEvent);
  const user = useSelector((state) => state.session.user);

  const modalState = useSelector((state) => {
    return state?.modal ? state.modal : null ;
  });
  
  // const [renderUpdate, setRenderUpdate] = useState(false);
  
  useEffect(() => {
    dispatch(eventActions.fetchEvent(eventId))
  }, [dispatch, eventId])

  if (!event.title) {
    return <div></div>
  }

  // if (event.peopleGoing) {
  //   setLiked(event.peopleGoing.includes(user._id) ? true : false)
  // }

  const deleteThisEvent = (e) => {
    e.preventDefault(); 
    dispatch(eventActions.deleteEvent(event._id));
    backToTrip();
  };

  const renderUpdateForm = (e) => {
    dispatch({ type: "modalOn", component: 'editEvent' })
  };

  let eventOrganizer;
  let eventOrganizerButtons;
  
  if(event.peopleGoing.length !== 0) {
    eventOrganizer = event.peopleGoing[0]._id;
  }
  
  if (event.peopleGoing.length === 0 || user._id === eventOrganizer) {
    eventOrganizerButtons = (
      <div className='event-show-buttons'>
        <button onClick={renderUpdateForm}>Update</button>
        <button onClick={deleteThisEvent}>Delete</button>
      </div>
    )
  };


  const modalComponent = () => {
    if (modalState.component === 'editEvent') {
        return (
            <EventUpdateForm />
        )
    }
  };


  const backToTrip = () => {
    // if (typeof window !== 'undefined') {
    //   window.location.href = `/trips/${event.tripId}`;
    // }
    history.push(`/trips/${event.tripId}`);
  }


  // Date information to be shown on Event Show page
  let splitStartDate = event.startDate.split('-');
  let splitEndDate = event.endDate.split('-');

  const months = {
    '01': 'Jan', '02': 'Feb', '03': 'Mar', '04': 'Apr', '05': 'May', '06': 'June',
    '07': 'July', '08': 'Aug', '09': 'Sept', '10': 'Oct', '11': 'Nov', '12': 'Dec'
  };

  splitStartDate[1] = months[splitStartDate[1]];
  splitEndDate[1] = months[splitEndDate[1]];
  let startSplit = splitStartDate[2].split('T');
  let endSplit = splitEndDate[2].split('T');
  splitStartDate[2] = startSplit[0];
  splitEndDate[2] = endSplit[0];

  const monthStart = splitStartDate[1];
  const monthEnd = splitEndDate[1];
  const yearStart = splitStartDate[0];
  const yearEnd = splitEndDate[0];
  const dayStart = startSplit[0];
  const dayEnd = endSplit[0];

  //No need for milliseconds
  let timeStart = startSplit[1].slice(0, 5);
  let timeEnd = endSplit[1].slice(0, 5);
  (Math.floor(timeStart.split(':')[0] / 12) === 1 ? timeStart = timeStart + 'PM' : timeStart = timeStart + 'AM');
  (Math.floor(timeEnd.split(':')[0] / 12) === 1 ? timeEnd = timeEnd + 'PM' : timeEnd = timeEnd + 'AM');

  //Correct AM and PM timing
  timeStart = timeStart.split(':');
  (parseInt(timeStart[0]) > 12 ? timeStart[0] = toString(parseInt(timeStart[0] - 12)) : timeStart[0] = timeStart[0]);
  timeStart = timeStart.join(':');
  timeEnd = timeEnd.split(':');
  (parseInt(timeEnd[0]) > 12 ? timeEnd[0] = parseInt(timeEnd[0] - 12).toString() : timeEnd[0] = timeEnd[0]);
  timeEnd = timeEnd.join(':');


  //Date and Time Formatting
  let eventDates;
  if (yearEnd === yearStart) {
    if (dayStart == dayEnd) eventDates = `${monthStart} ${dayStart}, ${yearStart}`;
    else eventDates = `${monthStart} ${dayStart} til ${monthEnd} ${dayEnd} ${yearStart}`;
  } else eventDates = `${monthStart} ${dayStart}, ${yearStart} til ${monthEnd} ${dayEnd}, ${yearEnd}`;

  let eventTimes;
  if (timeStart === timeEnd) {
    if (timeStart === '12:00AM' && dayStart === dayEnd) eventTimes = 'All Day';
    else if (timeStart === '12:00AM') eventTimes = null;
    else eventTimes = timeStart;
  } else eventTimes = `${timeStart} - ${timeEnd}`;

  return (
    <>
      <div id='zig-zag11' className='pattern'/>
      <div className='event-show-page-wrapper'>
        {modalState.on && modalState.component !== 'showCreateTripForm'
          ? <div className='modal-background' onClick={() => { dispatch(closeModal()) }}></div>
          : null
        }
        {modalState.on && modalState.component !== 'showCreateTripForm'
          ? <div className='modal-wrapper'>{modalComponent()}</div>
          : null
        }
        <div className='paws paw-right'>
          <div className='claw-right'/>
        </div>
        <div className='paws paw-left'>
          <div className='claw-left' />
        </div>
        <div className='paws middle-left'>
          <div className='claw-middle' />
        </div>
        <div className='paws middle-right'>
          <div className='claw-middle' />  
        </div>
        <div className='paws pointer-left'>
          <div className='claw-pointer' />
        </div>
        <div className='paws pointer-right'>
          <div className='claw-pointer' />
        </div>
        <div className='pawlm paw-right' />
        <div className='pawlm paw-left' />
        <button id='back-button' onClick={backToTrip}>&larr;</button>
        <div id='event-show-page-container'>
          <div id='blank-page'>
            <div id='event-show-border'>
              <div id='event-header'>
                <div id='title-container'>
                  <div id='title'>
                    {event.title}
                  </div>
                </div>
                <div id='time-header'>
                  <span className='text-container'>{eventDates}</span>
                  <div id='time-container'>
                    {eventTimes}
                  </div>
                </div>
                <div id='cost-header'>
                  <span className='text-container'>{event.splitCostStructure ? 'Cost Per Person' : 'Total Cost'}</span>
                  <div>${event.cost}</div>
                </div>
                <div id='heart-container'>
                  {event.peopleGoing.some(person => person._id === user._id)
                    ? <img id='heart' src={heart} alt='going' onClick={() => {
                      dispatch(eventActions.removeUserFromEvent(eventId, user._id))
                    }} />
                    : <img id='heart' src={emptyHeart} alt='notGoing' onClick={() => {
                      dispatch(eventActions.addUserToEvent(eventId, user._id))
                    }} />
                  }
                  {event.peopleGoing.some(person => person._id === user._id) 
                    ? <div id='people-going-hover'>who is going?</div>
                    : <div id='people-going-hover'>interested?</div>
                  }
                  <div id='people-going-hide'>
                    {}
                  </div>
                </div>
              </div>
              <div id='event-information'>
                <div id='description-container'> 
                  {event.peopleGoing && event.peopleGoing[0] ? <span className='text-container'>Event Organizer: {event.peopleGoing[0].name}</span> : null}
                   <br/>
                  <div id='description'>{event.description}</div>
                </div>
                <div id='location-container'>
                  <span className='text-container'>Location</span>
                  <div>
                    {event.location.name ? <p>{event.location.name}</p> : null}
                    {event.location.city ? <p>{event.location.city}</p> : null}
                    {event.location.country ? <p>{event.location.country}</p> : null} 
                    {event.location.zipCode ? <p>{event.location.zipCode}</p> : null}
                  </div>
                </div>
                <div id='buttons-container'>
                  {eventOrganizerButtons ? <div>Update Event!</div> : null}
                  {eventOrganizerButtons ? eventOrganizerButtons : null}
                </div>
                <div id='event-image-container'>
                  <div id='event-image'>
                    <img src={event.imageUrl} alt="event" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default EventShowPage;
