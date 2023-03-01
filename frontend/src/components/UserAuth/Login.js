
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../store/modal';
import { useHistory } from 'react-router-dom';
import './UserAuth.css';

import { login, clearSessionErrors } from '../../store/session';

function LoginForm () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(state => state.errors.session);
  const dispatch = useDispatch();
  const history = useHistory();
  
  
  useEffect(() => {
    return () => {
      dispatch(clearSessionErrors());
    };
  }, [dispatch]);
  

  const update = (field) => {
    const setState = field === 'email' ? setEmail : setPassword;
    return e => setState(e.currentTarget.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(closeModal());
    dispatch(login({ email, password })); 
    history.push("/");
  }

  const LoginDemoUser = (e) => {
    e.preventDefault(); 
    dispatch(closeModal())
    dispatch(login({
      email: 'demo@email.com',
      password: 'password'
    }))
    history.push("/");
  }

  return (
    <form className="session-form" onSubmit={handleSubmit}>
      <h2>Log In</h2>
      <div className="errors">{errors?.email}</div>
      <label>
        <input type="text"
          value={email}
          onChange={update('email')}
          placeholder="Email"
        />
      </label>
      <div className="errors">{errors?.password}</div>
      <label>
        <input type="password"
          value={password}
          onChange={update('password')}
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
  );
}

export default LoginForm;