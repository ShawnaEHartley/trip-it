import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './TripShowPage.css';
import { fetchTrip, getTrip } from '../../store/trips';
import TripUpdateForm from '../TripUpdateForm/TripUpdateForm';
import { closeModal } from '../../store/modal';

const TripShowPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const { tripId } = useParams();
    const trip = useSelector(getTrip);
    const modalState = useSelector((state) => {
        return state?.modal ? state.modal : null ;
    })

    const [renderUpdate, setRenderUpdate] = useState(false);

    useEffect(() => {
        dispatch(fetchTrip(tripId))
    }, [dispatch]);

    const renderUpdateForm = e => {
        dispatch({ type: "modalOn", component: 'editTrip' })
    }

    const modalComponent = () => {
        if (modalState.component === 'editTrip') {
            return (
                <TripUpdateForm trip={trip} />
            )
        }
    }

    if (!trip) {
        return (
            <div></div>
        )
    }

    return (
        <div className="TripShowPage-wrapper">
            {modalState.on ? <div className='modal-background' onClick={() => { dispatch(closeModal()) }}></div> : ""}
            {modalState.on ? <div className='modal-wrapper'> {modalComponent()}</div> : ""}
            <div className="route-to-trip-edit">
                <button onClick={renderUpdateForm}>Edit Trip</button>
            </div>
        </div>
    );
}

export default TripShowPage;