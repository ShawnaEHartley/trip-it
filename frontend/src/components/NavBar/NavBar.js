import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../store/modal';
import { useHistory } from 'react-router-dom';

import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import Signup from '../UserAuth/Signup';
import Login from '../UserAuth/Login';
import { logout } from '../../store/session';
import TripCreateForm from '../TripCreateForm/TripCreateForm';

import './NavBar.css'; 


const NavBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const loggedIn = useSelector(state => !!state.session.user);
    const modalState = useSelector((state) => {
        return state.modal;
    });


    const showSignUp = () => {
        dispatch({type: 'modalOn', component: 'showSignUp'})
    };

    const showLogin = () => {
        dispatch({type: 'modalOn', component: 'showLogin'})
    };

    const showCreateTripForm = () => {
        dispatch({type: 'modalOn', component: 'showCreateTripForm'})
    };


    const modalComponent = () => {
        if (modalState.component === 'showSignUp') {
            return <Signup />
        } else if (modalState.component === 'showLogin') {
            return <Login />
        } else if (modalState.component === 'showCreateTripForm') {
            return <TripCreateForm />
        }
    };

    
    const backToHomeButton = async () => {
        history.push(`/trips`);
    };
    
    const toAboutUsPageButton = async () => {
        history.push(`/about`);
    };

    const logoutCurrentUser = () => {
        dispatch(logout())
        history.push(`/`);
    };


    const loggedOutNav = () => {
        return ( 
        <>
            <MenuItem onClick={showLogin}>Login</MenuItem>
            <MenuItem onClick={showSignUp}>Sign up</MenuItem>
            <MenuItem onClick={toAboutUsPageButton}>About Us</MenuItem>
        </>
        )
    };

    const loggedInNav = () => {
        return (
        <>
            <MenuItem onClick={backToHomeButton} id="back-to-trips-index-button-div">My Trips</MenuItem>
            <MenuItem onClick={showCreateTripForm}>Create Trip</MenuItem>
            <MenuItem onClick={toAboutUsPageButton}>About Us</MenuItem>
            <MenuItem onClick={logoutCurrentUser}>Logout</MenuItem>
        </>
        )
    };



    return (
        <div id='nav-bar-container'>
            { modalState.on ? <div className='modal-background' onClick={()=> {dispatch(closeModal())}}></div> : "" }
            { modalState.on ? <div className='modal-wrapper'>{modalComponent()}</div> : "" }
            <nav id='nav-bar'>
                <div id='nav-logo'onClick={() => history.push(`/`)}>Trip It</div>
                <Menu menuButton={<MenuButton>Compose.</MenuButton>} transition>  
                    { loggedIn ? loggedInNav() : loggedOutNav() }
                </Menu>
            </nav>
        </div>

    )

};

export default NavBar;