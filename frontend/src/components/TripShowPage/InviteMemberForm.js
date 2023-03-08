import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { addUserToTrip, fetchTrip, tripErrorsReducer } from '../../store/trips';

import './InviteMemberForm.css';

const InviteMemberForm = ({trip}) => {
  const dispatch = useDispatch();
  const { tripId } = useParams();
  const attendees = trip.members
  const errors = useSelector(state => state.errors.tripErrorsReducer);


  useEffect(() => {
    dispatch(fetchTrip(tripId));
  }, [dispatch, tripId])

  // search member by email

  const [inviteeEmail, setInviteeEmail] = useState("");

  const inviteMember = (e) => {
    e.preventDefault();
    //invite a member to this trip via their email via modal

    console.log(attendees)
    console.log(inviteeEmail)
    const includes = attendees.some(member => member.email === inviteeEmail);

    if (includes) {
      console.log('Email exists')
    } else {
      // dispatch(addUserToTrip(tripId, inviteeEmail))
      console.log('Email does not exist')
    }
  };

  return (
    <form action="">
      <div>Enter the email</div>
      <div></div>
      <input type="text" value= {inviteeEmail} onChange={e => {
        e.preventDefault();
        setInviteeEmail(e.target.value)
      }} />
      <button onClick={inviteMember}>Invite</button>
    </form>
  )

};

export default InviteMemberForm;