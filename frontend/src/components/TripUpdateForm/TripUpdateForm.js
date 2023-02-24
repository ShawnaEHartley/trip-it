import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { closeModal } from '../../store/modal';
import { deleteTrip, updateTrip } from '../../store/trips';
import './TripUpdateForm.css';

const TripUpdateForm = ({trip}) => {
// only available if the signed in user is the organizer of the trip
  const dispatch = useDispatch();

  const [title, setTitle] = useState(trip.title);
  const [description, setDescription] = useState(trip.description);
  const [startDate, setStartDate] = useState(trip.startDate.split('T')[0]);
  const [endDate, setEndDate] = useState(trip.endDate.split('T')[0]);
  const [streetAddress, setStreetAddress] = useState(trip.location.streetAddress);
  const [city, setCity] = useState(trip.location.city);
  const [state, setState] = useState(trip.location.state);
  const [zipCode, setZipCode] = useState(trip.location.zipCode);
  const [country, setCountry] = useState(trip.location.country);

  const submitUpdateTrip = (e) => {
    const tripObject = {
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
      organizer: trip.organizer
    };
    dispatch(closeModal());
    dispatch(updateTrip(tripObject, trip._id));
  };


    return (
      <form className='trip-update-form-wrapper' id='' action='' onSubmit={submitUpdateTrip}>
        <div className='trip-update-header-wrapper' id=''>
          <h1 className='trip-update-header' id=''> Update trip </h1>
          <h2 className='trip-update-subheader' id=''> {trip.title} </h2>
        </div>
  
        <div className='trip-update-content-wrapper'>
          <label className='trip-update-content-item'>
            <span className='trip-update-content-title trip-title' >Title </span>
            <input className='trip-update-content-input trip-title' type="text" value={title} onChange={e => {
              e.preventDefault();
              setTitle(e.target.value)}} />
          </label>
          <label className='trip-update-content-item'>
            <span className='trip-update-content-title trip-description' > Description </span>
            <textarea className='trip-update-content-input trip-description' type="text" value={description} onChange={e => {
              e.preventDefault();
              setDescription(e.target.value)}} />
          </label>
          <label className='trip-update-content-item'>
            <span className='trip-update-content-title trip-start-date' > Start date </span>
            <input className='trip-update-content-input trip-start-date' type="date" value={startDate} onChange={e => {
              e.preventDefault();
              setStartDate(e.target.value)}} />
          </label>
          <label className='trip-update-content-item'>
            <span className='trip-update-content-title trip-end-date' > End date </span>
            <input className='trip-update-content-input trip-end-date' type="date" value={endDate} onChange={e => {
              e.preventDefault();
              setEndDate(e.target.value)}} />
          </label>
          <div className='trip-update-location-input-wrapper'>
            <h2 className='trip-update-subtitle trip-location' > Location </h2>
            <label className='trip-update-content-item'>
              <span className='trip-update-content-loc-title trip-street-address'> Street address </span>
              <input className='trip-update-content-input trip-street-address' type="text" value={streetAddress} onChange={e => {
                e.preventDefault();
                setStreetAddress(e.target.value)}} />
            </label>
            <label className='trip-update-content-item'>
              <span className='trip-update-content-loc-title trip-city'> City </span>
              <input className='trip-update-content-input trip-city' type="text" value={city} onChange={e => {
                e.preventDefault();
                setCity(e.target.value)}} />
            </label>
            <label className='trip-update-content-item'>
              <span className='trip-update-content-loc-title trip-state'> State </span>
              <input className='trip-update-content-input trip-state' type="text" value={state} onChange={e => {
                e.preventDefault();
                setState(e.target.value)}} />
            </label>
            <label className='trip-update-content-item'>
              <span className='trip-update-content-loc-title trip-zip-code'> Zip code </span>
              <input className='trip-update-content-input trip-zip-code' type="text" value={zipCode} onChange={e => {
                e.preventDefault();
                setZipCode(e.target.value)}} />
            </label>
            <label className='trip-update-content-item'>
              <span className='trip-update-content-loc-title trip-country'> Country </span>
              <input className='trip-update-content-input trip-country' type="text" value={country} onChange={e => {
                e.preventDefault();
                setCountry(e.target.value)}} />
            </label>
          </div>
        </div>
        <div className='trip-update-submit-button-wrapper'>
          <button className='trip-update-button'>Update</button>
        </div>
      </form>
    )


};

export default TripUpdateForm;