import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, Redirect } from 'react-router-dom';

import { addUserToTrip, deleteTrip, fetchTrip, getTrip, clearTripErrors, removeUserFromTrip } from '../../store/trips'
import { closeModal } from '../../store/modal';
import EventIndex from '../EventIndex/EventIndex';
import EventsCreateForm from '../EventsCreateForm/EventsCreateForm'
import TripUpdateForm from '../TripUpdateForm/TripUpdateForm';
import InviteMemberForm from './InviteMemberForm';

import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

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

    useEffect(() => {
        dispatch(fetchTrip(tripId));
    }, [dispatch, tripId]);

    const renderUpdateForm = e => {
        dispatch(clearTripErrors())
        dispatch({ type: "modalOn", component: 'editTrip' })
    };

    const renderCreateEvent = e => {
      dispatch({type:'modalOn', component: 'createEvent'})
    }

    const inviteMember = e => {
      dispatch(clearTripErrors());
      dispatch({type: 'modalOn', component: 'inviteMember'})
    }


    const removeMemberFromTrip = (e) => {
      if (trip.members.some((member) => member._id === user._id)) {
        dispatch(removeUserFromTrip(tripId, user._id));
        history.push('/');
      }
    }


    const modalComponent = () => {
        if (modalState.component === 'editTrip') {
            return (
                <TripUpdateForm trip={trip} />
            )
        } else if (modalState.component === 'createEvent') {
            return (
              <EventsCreateForm tripId={tripId} />
            )
        } else if (modalState.component === 'inviteMember') {
          return (
            <InviteMemberForm />
          )
        }
    };

    if (!trip.title) {
        return (
            <div></div>
        )
    };

  const deleteThisTrip = (e) => {
    dispatch(deleteTrip(trip._id))
    history.push(`/trips`);
  }

  if (!user) {
    history.push(`/`);
}



  //Trip Show Page date visualization
  let splitStartDate = trip.startDate.split('-'); 
  let splitEndDate = trip.endDate.split('-');

  const months = {'01': 'January', '02': 'February', '03': 'March', '04': 'April', '05': 'May', '06': 'June',
                  '07': 'July', '08': 'August', '09': 'September', '10': 'October', '11': 'November', '12': 'December'};

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

  // Trip date format
  let tripDates;
  if (yearEnd === yearStart) {
    if (dayStart == dayEnd) tripDates = `${monthStart} ${dayStart} ${yearStart}`;
    else tripDates = `${monthStart} ${dayStart} til ${monthEnd} ${dayEnd} ${yearStart}`;
  } else tripDates = `${monthStart} ${dayStart}, ${yearStart} til ${monthEnd} ${dayEnd}, ${yearEnd}`;


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
  'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_27.png',
  'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_29.png',
  'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_30.png',
  'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_31.png',
  'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_33.png',
  'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_36.png',
  'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_40.png',
  'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_45.png']

  let rand = Math.floor(Math.random() * awsUrls.length);



  return (
    <>
      <div id='zig-zag11' className='pattern' />
      <div className='trip-show-page-container'>
          {modalState.on && modalState.component !== 'showCreateTripForm'
            ? <div className='modal-background' onClick={() => { dispatch(closeModal()) }}></div> 
            : null
          }
          {modalState.on && modalState.component !== 'showCreateTripForm'
            ? <div className='modal-wrapper'>{modalComponent()}</div> 
            : null
          }
        <button id='back-button' onClick={() => history.push(`/trips`)}>&larr;</button>
          <div id='post-card-container'>
          <div className='top-margin'>
            <div className='navigation-buttons'>
              <Menu menuButton={<MenuButton>Actions.</MenuButton>} transition>
                { user.name === trip.organizer.name ? <MenuItem onClick={renderUpdateForm}>Update trip</MenuItem> : ''}
                { user.name === trip.organizer.name ? <MenuItem onClick={deleteThisTrip}>Delete trip</MenuItem> : ''}
                <MenuItem onClick={inviteMember}>Invite a member</MenuItem>
                <MenuItem onClick={renderCreateEvent}>Create event</MenuItem>
                <MenuItem onClick={removeMemberFromTrip}>Remove me from trip</MenuItem>
              </Menu>
            </div>
            <div className='top-margin-right'>
              <img className='stamp-image' src={trip.stampImageUrl} alt='stamp'></img>
            </div>
          </div>
            <div className='trip-show-page-header-wrapper'>
              <div className='trip-show-page-header'>
                <h2>{trip.title}</h2>
              <p>{tripDates}</p>
              <p>Organized by {trip.organizer.name}</p>
              </div>
            </div>
            <div id='top-body-border'>
              <span>Events</span>
              <span>Details</span>
            </div>
            <div id='post-card-body-container'>
              <div className='post-card-space left-space'>
                <EventIndex tripId={trip._id}/>
              </div>
              <div id='post-card-center-border' />
              <div className='post-card-space'>
                <div className='post-card-members-wrapper'>
                  <div>To:</div>
                  <div id='trip-member-list-container'>
                    {trip.members.map((member) => {
                          return (<span key={member._id}><span>and </span>{member.name}<span>,</span></span>)})
                    }
                  </div>
                </div>
                <div id='info-container'>
                  <div>
                    <div>
                      {trip.location.streetAddress ? trip.location.streetAddress : ""}
                    </div>
                    <div>
                      {trip.location.city ? trip.location.city : ""}
                      {trip.location.city && trip.location.state ? ', ' : null}
                      {trip.location.state ? `${trip.location.state}` : ""}
                    </div>
                    <div>
                      {trip.location.country ? trip.location.country : ""} { trip.location.zipCode ? trip.location.zipCode : ""}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id='trip-footer'>
              <div>Description: {trip.description}</div>
            </div>
          </div>
      </div>
    </>
  )

};
;

export default TripShowPage;
