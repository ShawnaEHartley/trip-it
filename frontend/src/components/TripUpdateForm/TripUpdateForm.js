import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../store/modal';
import { updateTrip } from '../../store/trips';
import './TripUpdateForm.css';

const TripUpdateForm = (trip) => {
// only available if the signed in user is the organizer of the trip

const dispatch = useDispatch();

  const [title, setTitle] = useState(trip.title);
  const [description, setDescription] = useState(trip.description);
  const [startDate, setStartDate] = useState(trip.startDate);
  const [endDate, setEndDate] = useState(trip.endDate);
  const [streetAddress, setStreetAddress] = useState(trip.streetAddress);
  const [city, setCity] = useState(trip.city);
  const [state, setState] = useState(trip.state);
  const [zipCode, setZipCode] = useState(trip.zipCode);
  const [country, setCountry] = useState(trip.country);


  const submitUpdateTrip = (e) => {
    e.preventDefault();
    // closeModal();
    dispatch(updateTrip({
      title: title,
      description: description,
      startDate: startDate,
      endDate: endDate,
      streetAddress: streetAddress,
      city: city,
      state: state,
      zipCode: zipCode,
      country: country
    }))};


    return (
      <form className='trip-create-form-wrapper' id='' action='' onSubmit={submitUpdateTrip}>
        <div className='trip-create-header-wrapper' id=''>
          <h1 className='trip-create-header' id=''> Update trip </h1>
          <h2 clasName='trip-create-subheader' id=''> {trip.title} </h2>
        </div>
  
        <div className='trip-create-content-wrapper'>
          <label className='trip-create-content-item'>
            <span className='trip-create-content-title trip-title' > Trip title </span>
            <input className='trip-create-content-input trip-title' type="text" value={title} onChange={e => {setTitle(e.target.value)}} />
          </label>
          <label className='trip-create-content-item'>
            <span className='trip-create-content-title trip-description' > Trip description </span>
            <input className='trip-create-content-input trip-description' type="text" value={description} onChange={e => {setDescription(e.target.value)}} />
          </label>
          <label className='trip-create-content-item'>
            <span className='trip-create-content-title trip-start-date' > Trip start date </span>
            <input className='trip-create-content-input trip-start-date' type="date" value={startDate} onChange={e => {setStartDate(e.target.value)}} />
          </label>
          <label className='trip-create-content-item'>
            <span className='trip-create-content-title trip-end-date' > Trip end date </span>
            <input className='trip-create-content-input trip-end-date' type="date" value={endDate} onChange={e => {setEndDate(e.target.value)}} />
          </label>
          <div className='trip-create-location-input-wrapper'>
            <h2 className='trip-create-subtitle trip-location' > Trip location </h2>
            <label className='trip-create-content-item'>
              <span className='trip-create-content-title trip-street-address'> Street address </span>
              <input className='trip-create-content-input trip-street-address' type="text" value={streetAddress} onChange={e => {setStreetAddress(e.target.value)}} />
            </label>
            <label className='trip-create-content-item'>
              <span className='trip-create-content-title trip-city'> City </span>
              <input className='trip-create-content-input trip-city' type="text" value={city} onChange={e => {setCity(e.target.value)}} />
            </label>
            <label className='trip-create-content-item'>
              <span className='trip-create-content-title trip-state'> State </span>
              <input className='trip-create-content-input trip-state' type="text" value={state} onChange={e => {setState(e.target.value)}} />
            </label>
            <label className='trip-create-content-item'>
              <span className='trip-create-content-title trip-zip-code'> Zip code </span>
              <input className='trip-create-content-input trip-zip-code' type="text" value={zipCode} onChange={e => {setZipCode(e.target.value)}} />
            </label>
            <label className='trip-create-content-item'>
              <span className='trip-create-content-title trip-country'> Country </span>
              <input className='trip-create-content-input trip-country' type="text" value={country} onChange={e => {setCountry(e.target.value)}} />
            </label>
          </div>
        </div>
        <div className='trip-create-submit-button-wrapper'>
          <button>Submit</button>
        </div>
      </form>
    )


};

export default TripUpdateForm;