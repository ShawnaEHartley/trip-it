import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../store/modal';

import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import Signup from '../UserAuth/Signup';
import Login from '../UserAuth/Login';
import { logout } from '../../store/session';
import AboutUsPage from '../AboutUsPage/AboutUsPage';

import './NavBar.css'; 
import { Redirect, useHistory } from 'react-router-dom';


const NavBar = () => {

    const dispatch = useDispatch();

    const history = useHistory();

    const loggedIn = useSelector(state => !!state.session.user);

    const modalState = useSelector((state) => {
        return state.modal;
    })

    const showSignUp = () => {
        dispatch({type: 'modalOn', component: 'showSignUp'})
    };

    const showLogin = () => {
        dispatch({type: 'modalOn', component: 'showLogin'})
    }

    const modalComponent = () => {
        if (modalState.component === 'showSignUp') {
            return <Signup />
        } else if (modalState.component === 'showLogin') {
            return <Login />
        }
    };

    const loggedOutNav = () => {
        return ( 
        <>
            <MenuItem onClick={showSignUp}>Sign up</MenuItem>
            <MenuItem onClick={showLogin}>Login</MenuItem>
        </>
        )
    };

    const loggedInNav = () => {
        return (
        <>
            <MenuItem onClick={redirect}>About the developers</MenuItem>
            <MenuItem onClick={logoutCurrentUser}>Logout</MenuItem>
        </>
        )
    };

    // const redirect = () => {
    //     history.push('/about')
    // };

    const logoutCurrentUser = (e) => {
        dispatch(logout())
    };

    return (
        <div id='nav-bar-container'>
            { modalState.on ? <div className='modal-background' onClick={()=> {dispatch(closeModal())}}></div> : "" }
            { modalState.on ? <div className='modal-wrapper'> {modalComponent()}</div> : "" }
            <nav id='nav-bar'>
                <Menu menuButton={<MenuButton>Compose.</MenuButton>} transition>  
                    { loggedIn ? loggedInNav() : loggedOutNav() }
                    {/* <MenuItem onClick={showSignUp}>Sign up</MenuItem>
                    <MenuItem onClick={showLogin}>Login</MenuItem>
                    <MenuItem onClick={logoutCurrentUser}>Logout</MenuItem> */}
                </Menu>
            </nav>
        </div>

    )

}

export default NavBar;