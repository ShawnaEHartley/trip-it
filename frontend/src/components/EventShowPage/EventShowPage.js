import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as eventActions from '../../store/events';
import EventUpdateForm from '../EventsUpdateForm/EventsUpdateForm';
import { closeModal } from '../../store/modal';

const EventShowPage = () => {

  const dispatch = useDispatch();
  const { eventId } = useParams();
  const event = useSelector(eventActions.getEvent);
  const user = useSelector((state) => state.session.user);

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


  return (
    <div className='event-show-page-wrapper'>
      { modalState.on ? <div className='modal-background' onClick={()=> {dispatch(closeModal())}}></div> : "" }
      { modalState.on ? <div className='modal-wrapper'> {modalComponent()}</div> : "" }
      <div className='event-show-page-header-wrapper'>
        <div className='event-show-page-header'>
          <div>{event.title}</div>
          <div>{event.startDate}</div>
          <div>{event.endDate}</div>
          { user._id === eventOrganizer ? eventOrganizerButtons() : ""}
          <button>Like Event</button>
        </div>
      </div>

      <div className='event-show-page-body-wrapper'>
        <div className='event-show-page-body'>
          <div>{event.description}</div>
          <div>{ event.location.streetAddress ? event.location.streetAddress : "" }</div>
          <div>{ event.location.city ? event.location.city : "" }</div>
          <div>{ event.location.state ? event.location.state : "" }</div>
          <div>{ event.location.zipCode ? event.location.zipCode : "" }</div>
          <div>{ event.location.country ? event.location.country : "" }</div>
          <div>Cost: ${event.cost} { event.splitCostStructure ? 'Per Person' : 'In Total'}</div>
          <div>Booked? { event.booked ? 'yes' : 'no' }</div>
          <div className='event-show-page-people-going'>
            {event.peopleGoing.map((person) => {
              return <div>{person.name}</div>
            })}
          </div>
        </div>
      </div>
    </div>
  )
};

export default EventShowPage;