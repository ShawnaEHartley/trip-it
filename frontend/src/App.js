import { Switch } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from './components/Routes/Routes';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import SplashPage from './components/SplashPage/SplashPage';
import { Route } from 'react-router-dom';


function App() {
  return (
    <>
    <NavBar />
    <Switch>
        <Route path="/">
          <SplashPage />
        </Route>
    </Switch>
    <Footer />
    </>
  );
}

export default App;
