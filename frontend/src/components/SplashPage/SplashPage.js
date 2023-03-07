import React from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import TripIndex from '../TripIndex/TripIndex';
import MainPage from '../MainPage/MainPage'

import './SplashPage.css'; 



const SplashPage = () => {
    const dispatch = useDispatch();

    const loggedIn = useSelector(state => !!state.session.user);

    const showLogin = () => {
        dispatch({ type: 'modalOn', component: 'showLogin' })
    };

    if (!loggedIn) {

        return (
            // iterate through events here //
            <div id='splash-page-container'>
                <div id='tripit-container'>
                    <div id='tripit-logo' onClick={showLogin}>
                        Trip it
                    </div>
                </div>
                <div id='left-splash'>
                    <div className='event-index'>
                        <h3>mauris pharetra</h3>
                        <div>New York, NY</div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Vitae congue mauris rhoncus aenean vel. Nulla porttitor massa id neque aliquam vestibulum morbi.
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>mauris pharetra</h3>
                        <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Vitae congue mauris rhoncus aenean vel. Nulla porttitor massa id neque aliquam vestibulum morbi.
                        </div>
                    </div>
                    <div className='event-index'>
                        <h3>mauris pharetra</h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Vitae congue mauris rhoncus aenean vel. Nulla porttitor massa id neque aliquam vestibulum morbi.
                    </div>
                    <div className='event-index'>
                        <h3>mauris pharetra</h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Vitae congue mauris rhoncus aenean vel. Nulla porttitor massa id neque aliquam vestibulum morbi.
                    </div>
                    <div className='event-index'>
                        <h3>mauris pharetra</h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Vitae congue mauris rhoncus aenean vel. Nulla porttitor massa id neque aliquam vestibulum morbi.
                    </div>
                    <div className='event-index'>
                        <h3>mauris pharetra</h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Vitae congue mauris rhoncus aenean vel. Nulla porttitor massa id neque aliquam vestibulum morbi.
                    </div>
                    <div className='event-index'>
                        <h3>mauris pharetra</h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Vitae congue mauris rhoncus aenean vel. Nulla porttitor massa id neque aliquam vestibulum morbi.
                    </div>
                </div>
                <div id='center-left-splash'>
                    <div className='event-index'>
                        <h3>mauris pharetra</h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Vitae congue mauris rhoncus aenean vel. Nulla porttitor massa id neque aliquam vestibulum morbi.
                    </div>
                    <div className='event-index'>
                        <h3>mauris pharetra</h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Vitae congue mauris rhoncus aenean vel. Nulla porttitor massa id neque aliquam vestibulum morbi.
                    </div>
                    <div className='event-index'>
                        <h3>mauris pharetra</h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Vitae congue mauris rhoncus aenean vel. Nulla porttitor massa id neque aliquam vestibulum morbi.
                    </div>
                    <div className='event-index'>
                        <h3>mauris pharetra</h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Vitae congue mauris rhoncus aenean vel. Nulla porttitor massa id neque aliquam vestibulum morbi.
                    </div>
                    <div className='event-index'>
                        <h3>mauris pharetra</h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Vitae congue mauris rhoncus aenean vel. Nulla porttitor massa id neque aliquam vestibulum morbi.
                    </div>
                    <div className='event-index'>
                        <h3>mauris pharetra</h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Vitae congue mauris rhoncus aenean vel. Nulla porttitor massa id neque aliquam vestibulum morbi.
                    </div>
                    <div className='event-index'>
                        <h3>mauris pharetra</h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Vitae congue mauris rhoncus aenean vel. Nulla porttitor massa id neque aliquam vestibulum morbi.
                    </div>
                </div>
                <div id='center-right-splash'>
                    <div className='event-index'>
                        <h3>mauris pharetra</h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Vitae congue mauris rhoncus aenean vel. Nulla porttitor massa id neque aliquam vestibulum morbi.
                    </div>
                    <div className='event-index'>
                        <h3>mauris pharetra</h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Vitae congue mauris rhoncus aenean vel. Nulla porttitor massa id neque aliquam vestibulum morbi.
                    </div>
                    <div className='event-index'>
                        <h3>mauris pharetra</h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Vitae congue mauris rhoncus aenean vel. Nulla porttitor massa id neque aliquam vestibulum morbi.
                    </div>
                    <div className='event-index'>
                        <h3>mauris pharetra</h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Vitae congue mauris rhoncus aenean vel. Nulla porttitor massa id neque aliquam vestibulum morbi.
                    </div>
                    <div className='event-index'>
                        <h3>mauris pharetra</h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Vitae congue mauris rhoncus aenean vel. Nulla porttitor massa id neque aliquam vestibulum morbi.
                    </div>
                    <div className='event-index'>
                        <h3>mauris pharetra</h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Vitae congue mauris rhoncus aenean vel. Nulla porttitor massa id neque aliquam vestibulum morbi.
                    </div>
                    <div className='event-index'>
                        <h3>mauris pharetra</h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Vitae congue mauris rhoncus aenean vel. Nulla porttitor massa id neque aliquam vestibulum morbi.
                    </div>
                </div>
                <div id='right-splash'>
                    <div className='event-index'>
                        <h3>mauris pharetra</h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Vitae congue mauris rhoncus aenean vel. Nulla porttitor massa id neque aliquam vestibulum morbi.
                    </div>
                    <div className='event-index'>
                        <h3>mauris pharetra</h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Vitae congue mauris rhoncus aenean vel. Nulla porttitor massa id neque aliquam vestibulum morbi.
                    </div>
                    <div className='event-index'>
                        <h3>mauris pharetra</h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Vitae congue mauris rhoncus aenean vel. Nulla porttitor massa id neque aliquam vestibulum morbi.
                    </div>
                    <div className='event-index'>
                        <h3>mauris pharetra</h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Vitae congue mauris rhoncus aenean vel. Nulla porttitor massa id neque aliquam vestibulum morbi.
                    </div>
                    <div className='event-index'>
                        <h3>mauris pharetra</h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Vitae congue mauris rhoncus aenean vel. Nulla porttitor massa id neque aliquam vestibulum morbi.
                    </div>
                    <div className='event-index'>
                        <h3>mauris pharetra</h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Vitae congue mauris rhoncus aenean vel. Nulla porttitor massa id neque aliquam vestibulum morbi.
                    </div>
                    <div className='event-index'>
                        <h3>mauris pharetra</h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Vitae congue mauris rhoncus aenean vel. Nulla porttitor massa id neque aliquam vestibulum morbi.
                    </div>
                </div>
            </div>
        )
    } else {
        return <TripIndex />
    }
};

export default SplashPage;