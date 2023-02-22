import React, { useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../store/model';
import { updateEvent } from '../../store/events';
import './EventCreateForm.css';


const EventUpdateForm = (event) => {

    const dispatch = useDispatch(); 

    const [title, setTitle] = useState(event.title); 
    const [description, setDescription] = useState(event.description)
    const [startDate, setStartDate] = useState(event.startDate);
    const [endDate, setEndDate] = useState(event.endDate);
    const [streetAddress, setStreetAddress] = useState(event.location.streetAddress);
    const [city, setCity] = useState(event.location.city);
    const [state, setState] = useState(event.location.state);
    const [zipCode, setZipCode] = useState(event.location.zipCode);
    const [country, setCountry] = useState(event.location.country);
    const [cost, setCost] = useState(event.cost);
    const [splitCostStructure, setSplitCostStructure] = useState(event.splitCostStructure);


    const submitUpdateEvent = (e) => {
      e.preventDefault(); 
      dispatch(updateEvent({
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
      }))
    };

    return (
        <form className='event-create-form-wrapper' id='' action='' onSubmit={submitUpdateEvent}>
        <div className='event-create-header-wrapper' id=''>
          <h1 className='event-create-header' id=''> Update event </h1>
          <h2 clasName='event-create-subheader' id=''> {event.title} </h2>
        </div>
  
        <div className='event-create-content-wrapper'>
          <label className='event-create-content-item'>
            <span className='event-create-content-title event-title' > Event title </span>
            <input className='event-create-content-input event-title' type="text" value={title} onChange={e => {setTitle(e.target.value)}} />
          </label>
          <label className='event-create-content-item'>
            <span className='event-create-content-title event-description' > Event description </span>
            <input className='event-create-content-input event-description' type="text" value={description} onChange={e => {setDescription(e.target.value)}} />
          </label>
          <label className='event-create-content-item'>
            <span className='event-create-content-title event-start-date' > Event start date </span>
            <input className='event-create-content-input event-start-date' type="date" value={startDate} onChange={e => {setStartDate(e.target.value)}} />
          </label>
          <label className='event-create-content-item'>
            <span className='event-create-content-title event-end-date' > Event end date </span>
            <input className='event-create-content-input event-end-date' type="date" value={endDate} onChange={e => {setEndDate(e.target.value)}} />
          </label>
          <div className='event-create-location-input-wrapper'>
            <h2 className='event-create-subtitle event-location' > Event location </h2>
            <label className='event-create-content-item'>
              <span className='event-create-content-title event-street-address'> Street address </span>
              <input className='event-create-content-input event-street-address' type="text" value={streetAddress} onChange={e => {setStreetAddress(e.target.value)}} />
            </label>
            <label className='event-create-content-item'>
              <span className='event-create-content-title event-city'> City </span>
              <input className='event-create-content-input event-city' type="text" value={city} onChange={e => {setCity(e.target.value)}} />
            </label>
            <label className='event-create-content-item'>
              <span className='event-create-content-title event-state'> State </span>
              <input className='event-create-content-input event-state' type="text" value={state} onChange={e => {setState(e.target.value)}} />
            </label>
            <label className='event-create-content-item'>
              <span className='event-create-content-title event-zip-code'> Zip code </span>
              <input className='event-create-content-input event-zip-code' type="text" value={zipCode} onChange={e => {setZipCode(e.target.value)}} />
            </label>
            <label className='event-create-content-item'>
              <span className='event-create-content-title event-country'> Country </span>
              <input className='event-create-content-input event-country' type="text" value={country} onChange={e => {setCountry(e.target.value)}} />
            </label>
            <label className='event-create-content-item'>
                <span className='event-create-content-title event-cost'>Cost</span>
                <input className='event-create-content-input event-cost' type='text' value={cost} onChange={e => {setCost(e.target.value)}} />
            </label>
            <label className='event-create-content-item'>
                <span className='event-create-content-title event-split-cost'>Split Cost By</span>
                <input className='event-create-content-input event-split-cost' type='text' value={splitCostStructure} onChange={e => {setSplitCostStructure(e.target.value)}} />
            </label>            
          </div>
        </div>
        <div className='event-create-submit-button-wrapper'>
          <button>Submit</button>
        </div>
      </form>
    )
 
};

export default EventUpdateForm;