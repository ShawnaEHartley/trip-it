

const EventShowPage = ({event}) => {


  return (
    <div className='event-show-page-wrapper'>
      <div className='event-show-page-header-wrapper'>
        <div className='event-show-page-header'>
          <div>{event.title}</div>
          <div>{event.startDate}</div>
          <div>{event.endDate}</div>
          <button>UpdateEvent</button>
          <button>DeleteEvent</button>
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