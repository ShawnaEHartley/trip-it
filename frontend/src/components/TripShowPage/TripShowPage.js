import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { addUserToTrip, deleteTrip, fetchTrip, getTrip } from '../../store/trips'
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
    const user = useSelector((state) => state.session.user);
    
    const { tripId } = useParams();
    const trip = useSelector(getTrip);
    const modalState = useSelector((state) => {
        return state?.modal ? state.modal : null ;
    });

    const [renderUpdate, setRenderUpdate] = useState(false);
    const [addMember, setaddMember] =useState("")

    useEffect(() => {
        dispatch(fetchTrip(tripId));
    }, [dispatch, tripId]);

    const renderUpdateForm = e => {
        dispatch({ type: "modalOn", component: 'editTrip' })
    };

    const renderCreateEvent = e => {
      dispatch({type:'modalOn', component: 'createEvent'})
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
    dispatch(addUserToTrip(tripId, addMember))
  };


  const tripOrganizerButtons = () => {
    return (
      <div id='form-button-container'>
        <button onClick={renderUpdateForm} className='trip-show-button form-button patch-buttons'>Update trip</button>
        <button onClick={deleteThisTrip} className='trip-show-button form-button patch-buttons'>Delete trip</button>
      </div>
    )
  };

  const deleteThisTrip = (e) => {
    dispatch(deleteTrip(trip._id))
    if (typeof window !== 'undefined') {
      window.location.href = "/trips";
  }
  }

  if (!user) {
    if (typeof window !== 'undefined') {
        window.location.href = "/";
    }
}


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
          {modalState.on ? <div className='modal-background' onClick={() => { dispatch(closeModal()) }}></div> : ""}
          {modalState.on ? <div className='modal-wrapper'> {modalComponent()}</div> : ""}
          <div id='post-card-container'>
          <div className='top-margin'>
            <div className='navigation-buttons'>
              <Menu menuButton={<MenuButton>Actions.</MenuButton>} transition>
                <MenuItem onClick={renderUpdateForm}>Update trip</MenuItem>
                <MenuItem onClick={deleteThisTrip}>Delete trip</MenuItem>
                {/* <MenuItem onClick={inviteMember}>Invite a member</MenuItem> */}
                <MenuItem onClick={renderCreateEvent}>Create event</MenuItem>
              </Menu>
            </div>
            <div className='top-margin-right'>
              <img className='stamp-image' src={awsUrls[rand]} alt='stamp'></img>
            </div>
          </div>
            {/* {user._id === trip.organizer._id ? tripOrganizerButtons() : null } */}
            <div className='trip-show-page-header-wrapper'>
              <div className='trip-show-page-header'>
                <h2>{trip.title}</h2>
              <p>{monthStart} {dayStart}, {yearStart} til {monthEnd} {dayEnd}, {yearEnd}</p>
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
                <div>
                {trip.members.map((member) => {
                      return (<span>{member.name}</span>)})}
                </div>
              </div>
                <div id='info-container'>
                  <div>
                    {trip.location.streetAddress ? trip.location.streetAddress : ""} <br/>
                    {trip.location.city ? trip.location.city : ""} <br/>
                    {trip.location.state ? `, ${trip.location.state}` : ""}
                    {trip.location.country ? trip.location.country : ""} { trip.location.zipCode ? trip.location.zipCode : ""}
                  </div>
                  <p className='trip-show-description'>Description: ({trip.description})</p>
                </div>
                <div>
                <span className='add-a-member'>
                  <input type="text" placeholder='invite a member' value={addMember} onChange={e => {
                    e.preventDefault();
                    setaddMember(e.target.value);
                  }} />
                  <span onClick={inviteMember}>+</span>
                </span>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )

};
;

export default TripShowPage;