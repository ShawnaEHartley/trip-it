import InviteMemberForm from './InviteMemberForm';

import './TripShowPage.css'

const TripShowPage = ({trip}) => {


  const inviteMember = (e) => {
    e.preventDefault();
    //invite a member to this trip via their email via modal
    <InviteMemberForm />
  };

  const makeAnEvent = (e) => {
    e.preventDefault();
    // open modal to create an event form
  }

  return (
    <div className='trip-show-page-outter-wrapper'>
      <div className='trip-show-page-header-wrapper'>
        <div className='trip-show-page-header'>
          <div>{trip.title} </div>
          <div>{trip.organizer.name}</div>
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
  )

};

export default TripShowPage;