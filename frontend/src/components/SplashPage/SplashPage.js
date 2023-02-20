import React from 'react'; 
import './SplashPage.css'; 
import MainPage from '../MainPage/MainPage'
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';



const SplashPage = () => {
    const loggedIn = useSelector(state => !!state.session.user);
    const location = useLocation();

    if (location.pathname === "/" && !loggedIn) {
        return (
            <div>
                Splash Page Container placeholder 
            </div>
        )
    } else {
        <MainPage />
    }
};

export default SplashPage;