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
  splitStartDate[2] = splitStartDate[2].split('T')[0];
  splitEndDate[2] = splitEndDate[2].split('T')[0];

  const monthStart = splitStartDate[1];
  const monthEnd = splitEndDate[1];
  const dayStart = splitStartDate[2];
  const dayEnd = splitEndDate[2];
  const yearStart = splitStartDate[0];
  const yearEnd = splitEndDate[0];

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
        <div className='paws middle-left'/>
        <div className='paws middle-right'/>
        {/* <div className='paws pointer-left'/>
        <div className='paws pointer-right'/> */}
        <div className='pawlm paw-right' />
        <div className='pawlm paw-left' />
        <button id='back-button' onClick={backToTrip}>&larr;</button>
        <div id='event-show-page-container'>
          <div id='blank-page'>
            <div id='event-show-border'>
              <div id='event-header'>
                <div id='title-container'>
                  <span className='text-container'>Title:</span>
                  {event.title}
                </div>
                <div id='time-header'>
                  <span className='text-container'>Date & Time:</span>
                  {event.startDate}
                </div>
                <div id='cost-header'>
                  <span className='text-container'>Cost: {event.splitCostStructure ? 'Per Person' : 'Total'}</span>
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
                    ? null
                    : <div>interested?</div>
                  }
                </div>
              </div>
              <div id='event-information'>
                <div id='description-container'> 
                  <span className='text-container'>Description:</span> {event.description}
                </div>
                <div id='location-container'>
                  <span className='text-container'>Location:</span>
                  <div>
                    {event.location.name ? <p>{event.location.name}</p> : null}
                    {event.location.city ? <p>{event.location.city}</p> : null}
                    {event.location.country ? <p>{event.location.country}</p> : ""} 
                    {event.location.zipCode ? <p>{event.location.zipCode}</p> : ""}
                  </div>
                </div>
                <div id='event-image-container'>
                  Placeholder Image
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='event-show-page-wrapper'>
        <div className='trip-show-page-container'>
          <div id='post-card-container' className='striped-border'>
            <div className='trip-show-page-header-wrapper event-header'>
              <div className='trip-show-page-header'>
              </div>
            </div>
            <div id='post-card-body-container'>
              <div className='post-card-space left-space event-show-left'>
                <p><span className='descr-span'>Cost: </span>${event.cost} {event.splitCostStructure ? 'per person' : 'total'}</p>
                <p id='descr-description'>Description: {event.description}</p>
                <div className='event-show-buttons'>
                  {eventOrganizerButtons}
                </div>
                  <button className='event-show-page-button' onClick={backToTrip}>Back to trip</button>
              </div>
              <div id='event-post-card-center-border' />
              <div className='post-card-space event-show-right'>
                <p>{monthStart} {dayStart}, {yearStart} til {monthEnd} {dayEnd}, {yearEnd}</p>
                  <div id='location-div'>
                    <p>{event.location.name ? event.location.name : ""}</p>
                    <p>{event.location.city ? event.location.city : ""}</p>
                    <p>{event.location.country ? event.location.country : ""} {event.location.zipCode ? event.location.zipCode : ""}</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
};

export default EventShowPage;
