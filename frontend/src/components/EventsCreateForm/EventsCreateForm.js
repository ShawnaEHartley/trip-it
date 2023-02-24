import React, { useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../store/modal';
import { createEvent } from '../../store/events';
import './EventsCreateForm.css';


const EventCreateForm = ({tripId}) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user);

    const today = new Date().toISOString();

    const [title, setTitle] = useState(""); 
    const [description, setDescription] = useState("")
    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(today);
    const [streetAddress, setStreetAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [country, setCountry] = useState("");
    const [cost, setCost] = useState(0);
    const [splitCostStructure, setSplitCostStructure] = useState(false);


    const submitEvent = (e) => {
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
            peopleGoing: [currentUser._id],
            cost: cost, 
            splitCostStructure: splitCostStructure,
            tripId: tripId
        }, tripId));
        dispatch(closeModal());
        if (typeof window !== 'undefined') {
          window.location.href = `/trips/${tripId}`;
      }
      };

    return (
        <form className='event-create-form-wrapper' id='' action='' onSubmit={submitEvent}>
        <div className='event-create-header-wrapper' id=''>
          <h1 className='event-create-header' id=''> Create event </h1>
        </div>
  
        <div className='event-create-content-wrapper'>
          <label className='event-create-content-item'>
            <span className='event-create-content-title event-title' > Title </span>
            <input className='event-create-content-input event-title' type="text" value={title} onChange={e => {
              e.preventDefault();
              setTitle(e.target.value)}} />
          </label>
          <label className='event-create-content-item'>
            <span className='event-create-content-title event-description' > Description </span>
            <textarea className='event-create-content-input event-description' type="text" value={description} onChange={e => {
              e.preventDefault();
              setDescription(e.target.value)}} />
          </label>
          <label className='event-create-content-item'>
            <span className='event-create-content-title event-start-date' > Start date </span>
            <input className='event-create-content-input event-start-date' type="date" value={startDate} onChange={e => {
              e.preventDefault();
              setStartDate(e.target.value)}} />
          </label>
          <label className='event-create-content-item'>
            <span className='event-create-content-title event-end-date' > End date </span>
            <input className='event-create-content-input event-end-date' type="date" value={endDate} onChange={e => {
              e.preventDefault();
              setEndDate(e.target.value)}} />
          </label>
          <div className='event-create-location-input-wrapper'>
            <h2 className='event-create-subtitle event-location' > Location </h2>
            <label className='event-create-content-item'>
              <span className='event-create-content-loc-title event-street-address'> Street address </span>
              <input className='event-create-content-input event-street-address' type="text" value={streetAddress} onChange={e => {
                e.preventDefault();
              setStreetAddress(e.target.value)}} />
            </label>
            <label className='event-create-content-item'>
              <span className='event-create-content-loc-title event-city'> City </span>
              <input className='event-create-content-input event-city' type="text" value={city} onChange={e => {
                e.preventDefault();
                setCity(e.target.value)}} />
            </label>
            <label className='event-create-content-item'>
              <span className='event-create-content-loc-title event-state'> State </span>
              <input className='event-create-content-input event-state' type="text" value={state} onChange={e => {
                e.preventDefault();
                setState(e.target.value)}} />
            </label>
            <label className='event-create-content-item'>
              <span className='event-create-content-loc-title event-zip-code'> Zip code </span>
              <input className='event-create-content-input event-zip-code' type="text" value={zipCode} onChange={e => {
                e.preventDefault();
                setZipCode(e.target.value)}} />
            </label>
            <label className='event-create-content-item'>
              <span className='event-create-content-loc-title event-country'> Country </span>
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
                setSplitCostStructure(e.target.value)}}>
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

export default EventCreateForm;