import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../store/modal';

import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import Signup from '../UserAuth/Signup';
import Login from '../UserAuth/Login';

import './NavBar.css'; 


const NavBar = () => {

    const dispatch = useDispatch();

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

    return (
        <div id='nav-bar-container'>
            { modalState.on ? <div className='modal-background' onClick={()=> {dispatch(closeModal())}}> x </div> : "" }
            { modalState.on ? <div className='modal-wrapper'> {modalComponent()}</div> : "" }
            <nav id='nav-bar'>
                <Menu menuButton={<MenuButton>Compose.</MenuButton>} transition>  
                    <MenuItem onClick={showSignUp}>Sign up</MenuItem>
                    <MenuItem onClick={showLogin}>Login</MenuItem>
                </Menu>
            </nav>
        </div>

    )

}

export default NavBar;