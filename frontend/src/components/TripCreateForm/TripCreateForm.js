import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../store/modal';
import { createTrip } from '../../store/trips';
import './TripCreateForm.css';


const TripCreateForm = () => {

  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");

  const submitTrip = (e) => {
    e.preventDefault();
    // closeModal();
    dispatch(createTrip({
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
      organizer: sessionUser._id,
      members: [{id: sessionUser._id, name: sessionUser.name}]
    }))
  };


  return (
    <form className='trip-create-form-wrapper' id='' action='' onSubmit={submitTrip}>
      <div className='trip-create-header-wrapper' id=''>
        <h1 className='trip-create-header' id=''> Create a new trip </h1>
        <h2 clasName='trip-create-subheader' id=''> for you and your friends </h2>
      </div>

      <div className='trip-create-content-wrapper'>
        <label className='trip-create-content-item'>
          <span className='trip-create-content-title trip-title' > Trip title </span>
          <input className='trip-create-content-input trip-title' type="text" value={title} onChange={e => {setTitle(e.target.value)}} placeholder='title'/>
        </label>
        <label className='trip-create-content-item'>
          <span className='trip-create-content-title trip-description' > Trip description </span>
          <input className='trip-create-content-input trip-description' type="text" value={description} onChange={e => {setDescription(e.target.value)}} placeholder='description'/>
        </label>
        <label className='trip-create-content-item'>
          <span className='trip-create-content-title trip-start-date' > Trip start date </span>
          <input className='trip-create-content-input trip-start-date' type="date" value={startDate} onChange={e => {setStartDate(e.target.value)}} placeholder='start date'/>
        </label>
        <label className='trip-create-content-item'>
          <span className='trip-create-content-title trip-end-date' > Trip end date </span>
          <input className='trip-create-content-input trip-end-date' type="date" value={endDate} onChange={e => {setEndDate(e.target.value)}} placeholder='end date'/>
        </label>
        <div className='trip-create-location-input-wrapper'>
          <h2 className='trip-create-subtitle trip-location' > Trip location </h2>
          <label className='trip-create-content-item'>
            <span className='trip-create-content-title trip-street-address'> Street address </span>
            <input className='trip-create-content-input trip-street-address' type="text" value={streetAddress} onChange={e => {setStreetAddress(e.target.value)}} placeholder='street address'/>
          </label>
          <label className='trip-create-content-item'>
            <span className='trip-create-content-title trip-city'> City </span>
            <input className='trip-create-content-input trip-city' type="text" value={city} onChange={e => {setCity(e.target.value)}} placeholder='city'/>
          </label>
          <label className='trip-create-content-item'>
            <span className='trip-create-content-title trip-state'> State </span>
            <input className='trip-create-content-input trip-state' type="text" value={state} onChange={e => {setState(e.target.value)}} placeholder='state'/>
          </label>
          <label className='trip-create-content-item'>
            <span className='trip-create-content-title trip-zip-code'> Zip code </span>
            <input className='trip-create-content-input trip-zip-code' type="text" value={zipCode} onChange={e => {setZipCode(e.target.value)}} placeholder='zip code'/>
          </label>
          <label className='trip-create-content-item'>
            <span className='trip-create-content-title trip-country'> Country </span>
            <input className='trip-create-content-input trip-country' type="text" value={country} onChange={e => {setCountry(e.target.value)}} placeholder='country'/>
          </label>
        </div>
      </div>
      <div className='trip-create-submit-button-wrapper'>
        <button>Submit</button>
      </div>
    </form>
  )
};

export default TripCreateForm;