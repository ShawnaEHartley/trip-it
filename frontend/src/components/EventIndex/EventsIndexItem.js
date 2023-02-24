import React from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import EventShowPage from '../EventShowPage/EventShowPage';
import { closeModal } from '../../store/modal';
import './EventIndex.css';


const EventIndexItem = ({event}) => {
    const history = useHistory()
    const dispatch = useDispatch(); 
    const loggedIn = useSelector(state => !!state.session.user);
  

    // const modalState = useSelector((state) => {
    //     return state.modal;
    // })

    // const showEventShowPage = () => {
    //     dispatch({type: 'modalOn', component: 'showEventShowPage'})
    // };

    // const modalComponent = () => {
    //     if (modalState.component === 'showEventShowPage') {
    //         return <EventShowPage />
    //     }
    // };


    const goToEventShowPage = (e) => {
        e.preventDefault()
        if (typeof window !== 'undefined') {
            window.location.href = `/events/${event._id}`;
        }
        // history.push(`/events/${event._id}`)
    }

    return (
        
        <div id="event-index-item-container" onClick={goToEventShowPage}>
            <ul>
                <li>Event: {event.title} </li>
                <li>Starts: {event.startDate.split("T")[0]}</li>
                <li>Ends: {event.endDate.split("T")[0]}</li>
                <li>Attendees: {event.peopleGoing.length}</li>
            </ul>
        </div>
    )

};

export default EventIndexItem; 