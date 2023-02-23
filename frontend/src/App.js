import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { Switch } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from './components/Routes/Routes';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import SplashPage from './components/SplashPage/SplashPage';
import { Route } from 'react-router-dom';
import LoginForm from './components/UserAuth/Login';
import { getCurrentUser } from './store/session';
import TripCreateForm from './components/TripCreateForm/TripCreateForm';
import TripShowPage from './components/TripShowPage/TripShowPage';

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
      <Route path="/createTrip">
        <TripCreateForm />
      </Route>
        <Route path="/trips/:tripId">
          <TripShowPage />
        </Route>
        <Route path="/createTrip">
          <TripCreateForm />
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