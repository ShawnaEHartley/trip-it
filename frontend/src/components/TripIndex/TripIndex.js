import React from 'react'; 
import { useDispatch } from 'react-redux';


const TripIndex = () => {
    const dispatch = useDispatch(); 


    return (
        <div id='main-page-container'>
            <div id='page'>
                <div id='stamp-page-container'>
                    <div id='stamp-page-header'>
                        <h2>Trip Collection</h2>
                        <p>Shawna Hartley</p>
                    </div>
                    <div className='stamp-container'>
                        <div className='stamp'>
                            <div className='link-replacement'>
                                Trip name <br />
                                Date and time <br />
                                Friends
                            </div>
                        </div>
                        <div className='stamp-divider' />
                        <div className='stamp'>
                            <div className='link-replacement'>
                                Trip name <br />
                                Date and time <br />
                                Friends
                            </div>
                        </div>
                        <div className='stamp-divider' />
                        <div className='stamp'>
                            <div className='link-replacement'>
                                Trip name <br />
                                Date and time <br />
                                Friends
                            </div>
                        </div>
                        <div className='stamp-divider' />
                    </div>
                    <div className='stamp-container'>

                    </div>
                    <div className='stamp-container'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TripIndex
