
const TripCreateForm = () => {

  // get trip and all attributes 


  return (
    <form className='trip-create-form-wrapper' id='' action=''>
      <div className='trip-create-header-wrapper' id=''>
        <h1 className='trip-create-header' id=''> Create a new trip </h1>
        <h2 clasName='trip-create-subheader' id=''> for you and your friends </h2>
      </div>

      <div className='trip-create-content-wrapper'>
        <label className='trip-create-content-item'>
          <span className='trip-create-content-title trip-title' > Trip title </span>
          <input className='trip-create-content-input trip-title' type="text" placeholder='title'/>
        </label>
        <label className='trip-create-content-item'>
          <span className='trip-create-content-title trip-description' > Trip description </span>
          <input className='trip-create-content-input trip-description' type="text" placeholder='description'/>
        </label>
        <label className='trip-create-content-item'>
          <span className='trip-create-content-title trip-start-date' > Trip start date </span>
          <input className='trip-create-content-input trip-start-date' type="date" placeholder='start date'/>
        </label>
        <label className='trip-create-content-item'>
          <span className='trip-create-content-title trip-end-date' > Trip end date </span>
          <input className='trip-create-content-input trip-end-date' type="date" placeholder='end date'/>
        </label>
        <div className='trip-create-location-input-wrapper'>
          <h2 className='trip-create-subtitle trip-location' > Trip location </h2>
          <label className='trip-create-content-item'>
            <span className='trip-create-content-title trip-street-address'> Street address </span>
            <input className='trip-create-content-input trip-street-address' type="text" placeholder='street address'/>
          </label>
          <label className='trip-create-content-item'>
            <span className='trip-create-content-title trip-city'> City </span>
            <input className='trip-create-content-input trip-city' type="text" placeholder='city'/>
          </label>
          <label className='trip-create-content-item'>
            <span className='trip-create-content-title trip-state'> State </span>
            <input className='trip-create-content-input trip-state' type="text" placeholder='state'/>
          </label>
          <label className='trip-create-content-item'>
            <span className='trip-create-content-title trip-zip-code'> Zip code </span>
            <input className='trip-create-content-input trip-zip-code' type="text" placeholder='zip code'/>
          </label>
          <label className='trip-create-content-item'>
            <span className='trip-create-content-title trip-country'> Country </span>
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