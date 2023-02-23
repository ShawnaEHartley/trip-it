import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { Switch } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from './components/Routes/Routes';
import Footer from './components/Footer/Footer';
import SplashPage from './components/SplashPage/SplashPage';
import { Route } from 'react-router-dom';
import LoginForm from './components/UserAuth/Login';
import { getCurrentUser } from './store/session';
import NavBar from './components/NavBar/NavBar';
import TripCreateForm from './components/TripCreateForm/TripCreateForm';
import TripUpdateForm from './components/TripUpdateForm/TripUpdateForm';
import TripShowPage from './components/TripShowPage/TripShowPage';
import EventIndex from './components/EventIndex/EventIndex';
import EventShowPage from './components/EventShowPage/EventShowPage';
import EventCreateForm from './components/EventsCreateForm/EventsCreateForm';
import EventUpdateForm from './components/EventsUpdateForm/EventsUpdateForm';

function App() {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    dispatch(getCurrentUser())
    .then(() => {
      setLoaded(true)
    })
  }, [dispatch]);

  return loaded && (
    <>
    <NavBar />
    <Switch>
      <Route path='/events/update/:eventId'>
        <EventUpdateForm />
      </Route>
      <Route path="/events/:eventId">
        <EventShowPage />
      </Route>
      <Route path='/createEvent'>
        <EventCreateForm />
      </Route>
      <Route path="/events">
        <EventIndex />
      </Route>
      <Route path="/createTrip">
        <TripCreateForm />
      </Route>
        <Route path="/trips/:tripId">
          <TripShowPage />
        </Route>
        <Route path="/updateTrip/:tripId">
          <TripUpdateForm />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/">
          <SplashPage />
        </Route>


    </Switch>
    {/* <Footer /> */}
    </>
  );
}

export default App;