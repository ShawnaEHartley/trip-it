import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as eventActions from '../../store/events';
import EventUpdateForm from '../EventsUpdateForm/EventsUpdateForm';
import { closeModal } from '../../store/modal';

import emptyHeart from '../../assets/images/icons8-favorite-96.png';
import heart from '../../assets/images/icons8-love-96.png'


const EventShowPage = () => {

  const dispatch = useDispatch();
  const { eventId } = useParams();
  const event = useSelector(eventActions.getEvent);
  const user = useSelector((state) => state.session.user);

  const [liked, setLiked] = useState(false);


  const modalState = useSelector((state) => {
    return state?.modal ? state.modal : null ;
  });

  const [renderUpdate, setRenderUpdate] = useState(false);

  useEffect(() => {
    dispatch(eventActions.fetchEvent(eventId))
  }, [])

  const deleteThisEvent = (e) => {
    e.preventDefault(); 
    dispatch(eventActions.deleteEvent(event._id))
  };

  const renderUpdateForm = (e) => {
    dispatch({ type: "modalOn", component: 'editEvent' })
  };

  const openUpdateForm = (e) => {
    if (typeof window !== 'undefined') {
      window.location.href = `/events/update/${event._id}`;
    }
    // history.push(`/events/update/${event._id}`);
  }


  const eventOrganizerButtons = () => {
    return (
      <div>
        <button onClick={renderUpdateForm}>Update</button>
        {/* <button onClick={openUpdateForm}>Update</button> */}
        <button onClick={deleteThisEvent}>Delete</button>
      </div>
    )
  }

  const modalComponent = () => {
    if (modalState.component === 'editEvent') {
        return (
            <EventUpdateForm />
        )
    }
  };

  if (!event.title) {
    return <div>loading...</div>
  }

  const eventOrganizer = event.peopleGoing[0]._id;


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
        { modalState.on ? <div className='modal-background' onClick={()=> {dispatch(closeModal())}}></div> : "" }
        { modalState.on ? <div className='modal-wrapper'> {modalComponent()}</div> : "" }
        <div className='trip-show-page-container'>
          {modalState.on ? <div className='modal-background' onClick={() => { dispatch(closeModal()) }}></div> : ""}
          {modalState.on ? <div className='modal-wrapper'> {modalComponent()}</div> : ""}
          <div id='post-card-container' className='striped-border'>
            {liked ? <img id='heart' src={heart} onClick={() => setLiked(false)} /> : <img id='heart' src={emptyHeart} onClick={() => setLiked(true)} />}
            <div className='trip-show-page-header-wrapper event-header'>
              <div className='trip-show-page-header'>
                <h2 id='event-header-h2'>{event.title}</h2>
                <h4>{event.booked ? 'ALREADY BOOKED' : 'Not yet booked!'}</h4>
              </div>
            </div>
            <div id='post-card-body-container'>
              <div className='post-card-space left-space event-show-left'>
                <p><span className='descr-span'>Cost: </span>${event.cost} {event.splitCostStructure ? 'per person' : 'total'}</p>
                <p id='descr-description'>{event.description}</p>
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
      </div>
    </>
  )
};

export default EventShowPage;