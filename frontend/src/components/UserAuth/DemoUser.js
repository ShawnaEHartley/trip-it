import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../store/modal';
import { login } from '../../store/session';


export const LoginDemoUser = (e) => {
    e.preventDefault(); 
    useDispatch(closeModal())
    useDispatch(login({
      email: 'demo@email.com',
      password: 'password'
    }));
};


export const SignUpAsDemoUser = (e) => {
    e.preventDefault(); 
    useDispatch(closeModal())
    useDispatch(login({
        email: 'demo@email.com', 
        name: 'Demo User',
        password: 'password', 
        password2: 'password'
    }));
};



