import React, { useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../store/model';
import { createEvent } from '../../store/events';
import './EventCreateForm.css';


const EventCreateForm = () => {

    const dispatch = useDispatch(); 

    const [title, setTitle] = useState(""); 
    const [description, setDescription] = useState("")
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [country, setCountry] = useState("");
    const [cost, setCost] = useState("");
    const [splitCostStructure, setSplitCostStructure] = useState("");


    const submitEvent = (e) => {
        e.preventDefault(); 
        dispatch(createEvent({
            title: title,
            description: description,
            startDate: startDate,
            endDate: endDate,
            location: {
                city: city,
                state: state,
                zipCode: zipCode,
                country: country,
                streetAddress: streetAddress
            },
            cost: cost, 
            splitCostStructure: splitCostStructure
        }))
    };

    return (
        <form className='event-create-form-wrapper' id='' action='' onSubmit={submitEvent}>
        <div className='event-create-header-wrapper' id=''>
          <h1 className='event-create-header' id=''> Create event </h1>
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

export default EventCreateForm;