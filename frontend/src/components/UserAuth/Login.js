
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './UserAuth.css';

import { login, clearSessionErrors } from '../../store/session';
import { closeModal } from '../../store/modal';


function LoginForm () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(state => state.errors.session);
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    return () => {
      dispatch(clearSessionErrors());
    };
  }, [dispatch]);
  

  const modalState = useSelector((state) => {
    return state.modal;
  });
  
  const showLoginModal = () => {
    dispatch({type: 'modalOn', component: 'showLogin'})
  };

  // how to use
  // const modalComponent = () => {
  //   if (modalState.component === 'showLogin') {
  //     return (
  //       <div>all html</div>
  //     )
  //   }
  // }


  const update = (field) => {
    const setState = field === 'email' ? setEmail : setPassword;
    return e => setState(e.currentTarget.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password })); 
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
    </form>
  );
}

export default LoginForm;