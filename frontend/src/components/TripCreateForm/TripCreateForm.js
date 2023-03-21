import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { closeModal } from '../../store/modal';
import { createTrip } from '../../store/trips';

import './TripCreateForm.css';


const TripCreateForm = () => {
  const errors = useSelector(state => state.errors.tripErrorsReducer);
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const today = new Date().toISOString();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");


let awsUrls = ['https://tripit-seeds.s3.amazonaws.com/stamps/stamp_1.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_2.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_3.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_4.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_5.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_6.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_7.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_8.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_9.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_10.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_11.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_12.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_13.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_14.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_15.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_16.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_17.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_18.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_19.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_20.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_21.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_22.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_23.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_24.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_25.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_26.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_27.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_28.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_29.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_30.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_31.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_32.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_33.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_34.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_35.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_36.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_37.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_38.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_39.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_40.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_41.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_42.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_43.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_44.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_45.png']

let rand = Math.floor(Math.random() * awsUrls.length);

  const submitTrip = e => {
    e.preventDefault();

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
      members: [sessionUser._id],
      tripStampUrl: awsUrls[rand]
    }, history));
  };

  if (endDate < startDate) {
    setEndDate(startDate);
  }

  return (
    <form className='trip-create-form-wrapper' id='' action='' onSubmit={submitTrip}>
      <div className='trip-create-header-wrapper' id=''>
        <h1 className='trip-create-header' id=''> Create a new trip </h1>
        <h2 className='trip-create-subheader' id=''> for you and your friends </h2>
      </div>
      <div className='trip-create-content-wrapper'>
        <div className="trip-create-errors">{errors?.title}</div>
        <label className='trip-create-content-item'>
          <span className='trip-create-content-title trip-title' > Title </span>
          <input className='trip-create-content-input trip-title' type="text" maxLength={25} value={title} onChange={e => {
              e.preventDefault();
              setTitle(e.target.value)}} placeholder='title'/>
        </label>
        <label className='trip-create-content-item'>
          <span className='trip-create-content-title trip-description' > Description </span>
          <textarea className='trip-create-content-input trip-description' type="text" value={description} onChange={e => {
              e.preventDefault();
              setDescription(e.target.value)}} placeholder='description'/>
        </label>
        <label className='trip-create-content-item'>
          <span className='trip-create-content-title trip-start-date' > Start date </span>
          <input className='trip-create-content-input trip-start-date' type="date" value={startDate} min={today.split('T')[0]} onChange={e => {
              e.preventDefault();
              setStartDate(e.target.value)
              endDate < e.target.value ? setEndDate(e.target.value) : setEndDate(endDate) ;
              }} placeholder='start date'/>
        </label>
        <label className='trip-create-content-item'>
          <span className='trip-create-content-title trip-end-date' > End date </span>
          <input className='trip-create-content-input trip-end-date' type="date" value={endDate} min={startDate.split('T')[0]} onChange={e => {
              e.preventDefault();
              setEndDate(e.target.value)}} placeholder='end date'/>
        </label>
        <div className='trip-create-location-input-wrapper'>
          <h2 className='trip-create-subtitle trip-location' > Location </h2>
          <label className='trip-create-content-item'>
            <span className='trip-create-content-loc-title trip-street-address'> Street address </span>
            <input className='trip-create-content-loc-input trip-street-address' type="text" value={streetAddress} onChange={e => {
              e.preventDefault();
              setStreetAddress(e.target.value)}} placeholder='street address'/>
          </label>
          <label className='trip-create-content-item'>
            <span className='trip-create-content-loc-title trip-city'> City </span>
            <input className='trip-create-content-loc-input trip-city' type="text" value={city} onChange={e => {
              e.preventDefault();
              setCity(e.target.value)}} placeholder='city'/>
          </label>
          <label className='trip-create-content-item'>
            <span className='trip-create-content-loc-title trip-state'> State </span>
            <input className='trip-create-content-loc-input trip-state' type="text" value={state} onChange={e => {
              e.preventDefault();
              setState(e.target.value)}} placeholder='state'/>
          </label>
          <label className='trip-create-content-item'>
            <span className='trip-create-content-loc-title trip-zip-code'> Zip code </span>
            <input className='trip-create-content-loc-input trip-zip-code' type="text" value={zipCode} onChange={e => {
              e.preventDefault();
              setZipCode(e.target.value)}} placeholder='zip code'/>
          </label>
          <label className='trip-create-content-item'>
            <span className='trip-create-content-loc-title trip-country'> Country </span>
            <input className='trip-create-content-loc-input trip-country' type="text" value={country} onChange={e => {
              e.preventDefault();
              setCountry(e.target.value)}} placeholder='country'/>
          </label>
        </div>
      </div>
      <div className='trip-create-submit-button-wrapper'>
        <button className='trip-create-button'>Submit</button>
      </div>
    </form>
  )
};

export default TripCreateForm;