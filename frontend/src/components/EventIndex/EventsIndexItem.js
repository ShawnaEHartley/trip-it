import React from 'react'; 
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import EventShowPage from '../EventShowPage/EventShowPage';
import { closeModal } from '../../store/modal';
import './EventIndex.css';


const EventIndexItem = ({event}) => {
    const dispatch = useDispatch(); 
    const history = useHistory();
    const loggedIn = useSelector(state => !!state.session.user);


    // Date formatting to iterate through
    let splitStartDate = event.startDate.split('-');
    let splitEndDate = event.endDate.split('-');

    const months = {
        '01': 'Jan', '02': 'Feb', '03': 'Mar', '04': 'Apr', '05': 'May', '06': 'June',
        '07': 'July', '08': 'Aug', '09': 'Sept', '10': 'Oct', '11': 'Nov', '12': 'Dec'
    };

    splitStartDate[1] = months[splitStartDate[1]];
    splitEndDate[1] = months[splitEndDate[1]];
    splitStartDate[2] = splitStartDate[2].split('T')[0];
    splitEndDate[2] = splitEndDate[2].split('T')[0];

    const monthStart = splitStartDate[1];
    const monthEnd = splitEndDate[1];
    const dayStart = splitStartDate[2];
    const dayEnd = splitEndDate[2];
    const yearStart = splitStartDate[0];
    const yearEnd = splitEndDate[0];

    // Event date format
    let dates;
    if (yearEnd === yearStart) {
        if (monthStart === monthEnd) {
            if (dayStart == dayEnd) dates = `${monthStart} ${dayStart}`;
            else dates = `${monthStart} ${dayStart} - ${dayEnd}`;
        } else dates = `${monthStart} ${dayStart} - ${monthEnd} ${dayEnd}`;
    } else {
        dates = `${monthStart} ${dayStart} ${yearStart} - ${monthEnd} ${dayEnd} ${yearEnd}`;
    }

    let description = event.description;
    let split = false;

    while (description.length > 36) {
        let tempDesc = description.split(" ");
        description = tempDesc.slice(0, tempDesc.length - 1).join(" ") + '...';
    }

    description.length  > 36 ? description = description.slice(0, 36) + '...' : description = description;

    const goToEventShowPage = (e) => {
        e.preventDefault()
        // if (typeof window !== 'undefined') {
        //     window.location.href = `/events/${event._id}`;
        // }
        history.push(`/events/${event._id}`)
    }


    return (
        
        <div className="event-index-item-container" onClick={goToEventShowPage}>
            <div><p>{event.title}</p> <span>{dates}</span></div>
            <div>
                <p className='push-right'>{description}</p><span>{event.peopleGoing.length} interested</span>
            </div>
        </div>
    )

};

export default EventIndexItem; 