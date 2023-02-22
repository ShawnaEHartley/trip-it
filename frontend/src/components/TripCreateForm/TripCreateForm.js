
const TripCreateForm = () => {

  // send to trip create function


  return (
    <form className='trip-create-form-wrapper' id='' action=''>
      <div className='trip-create-header-wrapper' id=''>
        <h1 className='trip-create-header' id=''> Create a new trip </h1>
        <h2 clasName='trip-create-subheader' id=''> for you and your friends </h2>
      </div>

      <div className='trip-create-content-wrapper'>
        <label className='trip-create-content-item'>
          <h2 className='trip-create-content-title trip-title' > Trip title </h2>
          <input className='trip-create-content-input trip-title' type="text" placeholder='title'/>
        </label>
        <label className='trip-create-content-item'>
          <h2 className='trip-create-content-title trip-description' > Trip description </h2>
          <input className='trip-create-content-input trip-description' type="text" placeholder='description'/>
        </label>
        <label className='trip-create-content-item'>
          <h2 className='trip-create-content-title trip-start-date' > Trip start date </h2>
          <input className='trip-create-content-input trip-start-date' type="date" placeholder='start date'/>
        </label>
        <label className='trip-create-content-item'>
          <h2 className='trip-create-content-title trip-end-date' > Trip end date </h2>
          <input className='trip-create-content-input trip-end-date' type="date" placeholder='end date'/>
        </label>
        <div className='trip-create-location-input-wrapper'>
          <h1 className='trip-create-subtitle trip-location' > Trip location </h1>
          <label className='trip-create-content-item'>
            <h2 className='trip-create-content-title trip-street-address'> Street address </h2>
            <input className='trip-create-content-input trip-street-address' type="text" placeholder='street address'/>
          </label>
          <label className='trip-create-content-item'>
            <h2 className='trip-create-content-title trip-city'> City </h2>
            <input className='trip-create-content-input trip-city' type="text" placeholder='city'/>
          </label>
          <label className='trip-create-content-item'>
            <h2 className='trip-create-content-title trip-state'> State </h2>
            <input className='trip-create-content-input trip-state' type="text" placeholder='state'/>
          </label>
          <label className='trip-create-content-item'>
            <h2 className='trip-create-content-title trip-zip-code'> Zip code </h2>
            <input className='trip-create-content-input trip-zip-code' type="text" placeholder='zip code'/>
          </label>
          <label className='trip-create-content-item'>
            <h2 className='trip-create-content-title trip-country'> Country </h2>
            <input className='trip-create-content-input trip-country' type="text" placeholder='country'/>
          </label>
        </div>
      </div>
      <div className='trip-create-submit-button-wrapper'>
        <button>Submit</button>
      </div>
    </form>
  )
}