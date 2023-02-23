import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../store/modal';

import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import Signup from '../UserAuth/Signup';
import Login from '../UserAuth/Login';
import { logout, login } from '../../store/session';

import './NavBar.css'; 


const NavBar = () => {

    const dispatch = useDispatch();

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
            {/* <MenuItem onClick={LoginDemoUser}>DemoUser</MenuItem> */}
        </>
        )
    };

    // below not working???? 
    const LoginDemoUser = (e) => {
        e.preventDefault(); 
        dispatch(closeModal())
        dispatch(login({
            email: 'demo@email.com',
            password: 'password'
        }))
    }

    const loggedInNav = () => {
        return (
        <>
            <MenuItem>About us</MenuItem>
            <MenuItem onClick={logoutCurrentUser}>Logout</MenuItem>
        </>
        )
    };

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