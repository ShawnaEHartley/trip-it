
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../store/modal';
import { useHistory } from 'react-router-dom';
import './UserAuth.css';

import { login, clearSessionErrors } from '../../store/session';

function LoginForm () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(state => state.errors.sessionErrorsReducer);
  // const [userErrors, setUserErrors] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  
  
  useEffect(() => {
    return () => {
      dispatch(clearSessionErrors());
    };
  }, [dispatch]);

  const showSignUp = () => {
    dispatch(closeModal());
    dispatch({ type: 'modalOn', component: 'showSignUp' })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password })); 
    history.push("/");
  }

  const LoginDemoUser = (e) => {
    e.preventDefault(); 
    dispatch(login({
      email: 'demo@email.com',
      password: 'password'
    }))
    history.push("/");
  }

  return (
    <>
      <button id='switch-auth-button' onClick={showSignUp}>Sign Up</button>
      <form className="session-form" onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <div className="errors">{errors?.email}</div>
        <label>
          <input type="text"
            value={email}
            onChange={e => {
              e.preventDefault();
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
        </label>
        <div className="errors">{errors?.password}</div>
        <label>
          <input type="password"
            value={password}
            onChange={e => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
        </label>
        <input
          type="submit"
          value="Log In"
          disabled={!email || !password}
        />
        <input 
        type="submit"
        value="Demo User Login" 
        onClick={LoginDemoUser}
        />
      </form>
    </>
  );
}

export default LoginForm;