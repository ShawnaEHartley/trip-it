
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import TripUpdateForm from '../TripUpdateForm/TripUpdateForm';
import InviteMemberForm from './InviteMemberForm';
import { deleteTrip, fetchTrip, getTrip } from '../../store/trips'
import { closeModal } from '../../store/modal';

import './TripShowPage.css'

const TripShowPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((state) => state.session.user);
    
    const { tripId } = useParams();
    const trip = useSelector(getTrip);
    const modalState = useSelector((state) => {
        return state?.modal ? state.modal : null ;
    });

    const [renderUpdate, setRenderUpdate] = useState(false);

    useEffect(() => {
        dispatch(fetchTrip(tripId))
    }, [dispatch]);

    const renderUpdateForm = e => {
        dispatch({ type: "modalOn", component: 'editTrip' })
    };

    const modalComponent = () => {
        if (modalState.component === 'editTrip') {
            return (
                <TripUpdateForm trip={trip} />
            )
        }
    };

    if (!trip.title) {
        return (
            <div></div>
        )
    };

  const inviteMember = (e) => {
    e.preventDefault();
    //invite a member to this trip via their email via modal
    <InviteMemberForm />
  };

  const makeAnEvent = (e) => {
    e.preventDefault();
    // open modal to create an event form
  };

  const tripOrganizerButtons = () => {
    return (
      <div>
        <button onClick={renderUpdateForm}>Update</button>
        <button onClick={deleteThisTrip}>Delete</button>
      </div>
    )
  };

  const deleteThisTrip = (e) => {
    e.preventDefault();
    dispatch(deleteTrip(trip._id))
  }

  return (
    <>
      <div id='zig-zag11' className='pattern' />
      <div className='trip-show-page-container'>
          {modalState.on ? <div className='modal-background' onClick={() => { dispatch(closeModal()) }}></div> : ""}
          {modalState.on ? <div className='modal-wrapper'> {modalComponent()}</div> : ""}
          <div id='post-card-container'>
            <div className='trip-show-page-header-wrapper'>
              <div className='trip-show-page-header'>
                <div>{trip.title} </div>
                {/* <div>{trip.organizer.name}</div> */}
                { user === trip.organizer ? {tripOrganizerButtons} : ""}
                <button onClick={makeAnEvent}>Create an Event</button>
              </div>
            </div>

            <div className='trip-show-page-body-wrapper'>
              <div className='trip-show-page-body'>
                <div>{trip.startDate}</div>
                <div>{trip.endDate}</div>
                <div>{trip.description}</div>
                <div>{ trip.location.streetAddress ? trip.location.streetAddress : "" }</div>
                <div>{ trip.location.city ? trip.location.city : "" }</div>
                <div>{ trip.location.state ? trip.location.state : "" }</div>
                <div>{ trip.location.zipCode ? trip.location.zipCode : "" }</div>
                <div>{ trip.location.coutry ? trip.location.country : "" }</div>
                <div className="trip-show-page-body-members">
                  {trip.members.map((member) => {
                    return <div>{member.name}</div>
                  })}
                </div>
              </div>
            </div>
            <div className='trip-show-page-invite-member-wrapper'>
              <button onClick={inviteMember}>Invite a member</button>
            </div>
          </div>

      </div>
    </>
  )

};
;

export default TripShowPage;