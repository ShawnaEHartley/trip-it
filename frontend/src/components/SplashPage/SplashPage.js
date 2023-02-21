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
            <div id='splash-page-container'>
                <div id='tripit-container'>
                    <div id='tripit-logo'>
                        Trip it
                    </div>
                </div>
                <div id='left-splash'>
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
                <div id='centter-left-splash'>
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
        <MainPage />
    }
};

export default SplashPage;