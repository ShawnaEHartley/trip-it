import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { addUserToTrip, fetchTrip } from '../../store/trips';

import './InviteMemberForm.css';

const InviteMemberForm = (trip) => {
  const dispatch = useDispatch();
  const { tripId } = useParams();

  useEffect(() => {
    dispatch(fetchTrip(tripId));
  }, [dispatch, tripId])

  // search member by email

  const [addMember, setaddMember] = useState("");

  const inviteMember = (e) => {
    e.preventDefault();
    //invite a member to this trip via their email via modal
    dispatch(addUserToTrip(tripId, addMember))
  };

  console.log(addMember)

  return (
    <form action="">
      <div>Enter the email</div>
      <input type="text" value= {addMember} onChange={e => {
        e.preventDefault();
        setaddMember(e.target.value)
      }} />
      <button onClick={inviteMember}>Invite</button>
    </form>
  )

};

export default InviteMemberForm;