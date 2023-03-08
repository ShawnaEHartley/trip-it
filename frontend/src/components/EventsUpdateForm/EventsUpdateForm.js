import React, { useState, useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { closeModal } from '../../store/modal'
import '../EventsCreateForm/EventsCreateForm.css';
import * as eventActions from '../../store/events';

const EventUpdateForm = () => {
    const dispatch = useDispatch(); 
    const event = useSelector(eventActions.getEvent);
    const { eventId } = useParams();
    const errors = useSelector(state => state.errors.eventErrorsReducer);

    const today = new Date().toISOString();

    useEffect(() => {
      dispatch(eventActions.fetchEvent(eventId))
    }, [dispatch]);

    const [title, setTitle] = useState(event.title); 
    const [description, setDescription] = useState(event.description)
    const [startDate, setStartDate] = useState(event.startDate.split('T')[0]);
    const [endDate, setEndDate] = useState(event.endDate.split('T')[0]);
    const [streetAddress, setStreetAddress] = useState(event.location.streetAddress);
    const [city, setCity] = useState(event.location.city);
    const [state, setState] = useState(event.location.state);
    const [zipCode, setZipCode] = useState(event.location.zipCode);
    const [country, setCountry] = useState(event.location.country);
    const [cost, setCost] = useState(event.cost);
    const [splitCostStructure, setSplitCostStructure] = useState(event.splitCostStructure);

    if (endDate < startDate) {
      setEndDate(startDate);
    }

    if (!event.title) {
      return <div></div>
    }

    const submitUpdateEvent = (e) => {
      e.preventDefault();

      const eventObject = {
        title: title,
        description: description,
        startDate: startDate,
        endDate: endDate,
        location: {
          streetAddress: streetAddress,
          city: city,
          state: state,
          zipCode: zipCode,
          country: country
        },
        cost: cost, 
        splitCostStructure: splitCostStructure
      }
      
      dispatch(eventActions.updateEvent(eventObject, event._id));
    };

    return (
        <form className='event-create-form-wrapper' id='' action='' onSubmit={submitUpdateEvent}>
        <div className='event-create-header-wrapper' id=''>
          <h1 className='event-create-header' id=''> Update event </h1>
          <h2 className='event-create-subheader' id=''> {event.title} </h2>
        </div>
  
        <div className='event-create-content-wrapper'>
          <div className="event-create-errors">{errors?.title}</div>
          <label className='event-create-content-item'>
            <span className='event-create-content-title event-title' > Event title </span>
            <input className='event-create-content-input event-title' type="text" value={title} onChange={e => {
              e.preventDefault();
              setTitle(e.target.value)}} />
          </label>
          <label className='event-create-content-item'>
            <span className='event-create-content-title event-description' > Event description </span>
            <input className='event-create-content-input event-description' type="text" value={description} onChange={e => {
              e.preventDefault();
              setDescription(e.target.value)}} />
          </label>
          <label className='event-create-content-item'>
            <span className='event-create-content-title event-start-date' > Event start date </span>
            <input className='event-create-content-input event-start-date' type="date" value={startDate} min={today < event.startDate ? today.split('T')[0] : event.startDate.split('T')[0] } onChange={e => {
              e.preventDefault();
              setStartDate(e.target.value)}} />
          </label>
          <label className='event-create-content-item'>
            <span className='event-create-content-title event-end-date' > Event end date </span>
            <input className='event-create-content-input event-end-date' type="date" value={endDate} min={startDate} onChange={e => {
              e.preventDefault();
              setEndDate(e.target.value)}} />
          </label>
          <div className='event-create-location-input-wrapper'>
            <h2 className='event-create-subtitle event-location' > Event location </h2>
            <label className='event-create-content-item'>
              <span className='event-create-content-title event-street-address'> Street address </span>
              <input className='event-create-content-input event-street-address' type="text" value={streetAddress} onChange={e => {
                e.preventDefault();
                setStreetAddress(e.target.value)}} />
            </label>
            <label className='event-create-content-item'>
              <span className='event-create-content-title event-city'> City </span>
              <input className='event-create-content-input event-city' type="text" value={city} onChange={e => {
                e.preventDefault();
                setCity(e.target.value)}} />
            </label>
            <label className='event-create-content-item'>
              <span className='event-create-content-title event-state'> State </span>
              <input className='event-create-content-input event-state' type="text" value={state} onChange={e => {
                e.preventDefault();
                setState(e.target.value)}} />
            </label>
            <label className='event-create-content-item'>
              <span className='event-create-content-title event-zip-code'> Zip code </span>
              <input className='event-create-content-input event-zip-code' type="text" value={zipCode} onChange={e => {
                e.preventDefault();
                setZipCode(e.target.value)}} />
            </label>
            <label className='event-create-content-item'>
              <span className='event-create-content-title event-country'> Country </span>
              <input className='event-create-content-input event-country' type="text" value={country} onChange={e => {
                e.preventDefault();
                setCountry(e.target.value)}} />
            </label>
            <label className='event-create-content-item'>
                <span className='event-create-content-title event-cost'>Cost</span>
              <input className='event-create-content-input event-cost' type='text' value={cost} onChange={e => {
                e.preventDefault();
                setCost(e.target.value)}} />
            </label>
            <label className='event-create-content-item'>
              <span className='event-create-content-title event-split-cost'></span>
              <select onChange={e => {
                e.preventDefault();
                setSplitCostStructure(e.target.value)
              }}>
                <option value={false}>In Total</option>
                <option value={true}>Per Person</option>
              </select>
            </label>          
          </div>
        </div>
        <div className='event-create-submit-button-wrapper'>
          <button className="event-create-button">Submit</button>
        </div>
      </form>
    )
 
};

export default EventUpdateForm;