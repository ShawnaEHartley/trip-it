import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './UserAuth.css';
import { signup, clearSessionErrors } from '../../store/session';

function SignupForm () {
const [email, setEmail] = useState('');
const [name, setName] = useState('');
const [password, setPassword] = useState('');
const [password2, setPassword2] = useState('');
const errors = useSelector(state => state.errors.session);
const dispatch = useDispatch();

useEffect(() => {
    return () => {
        dispatch(clearSessionErrors());
    };}, [dispatch]);

const update = field => {
    let setState;

    switch (field) {
        case 'email':
        setState = setEmail;
        break;
        case 'name':
        setState = setName;
        break;
        case 'password':
        setState = setPassword;
        break;
        case 'password2':
        setState = setPassword2;
        break;
        default:
        throw Error('Unknown field in Signup Form');
    }

    return e => setState(e.currentTarget.value);
}

const handleSubmit = e => {
    e.preventDefault();
    const user = {
        email,
        name,
        password
    };

    dispatch(signup(user)); 
}

return (
<form className="session-form" onSubmit={handleSubmit}>
    <h2>Sign Up Form</h2>
    <div className="errors">{errors?.email}</div>
    <label>
        <span>Email</span>
        <input type="text"
            value={email}
            onChange={update('email')}
            placeholder="Email"
        />
    </label>
    <div className="errors">{errors?.name}</div>
    <label>
        <span>Name</span>
        <input type="text"
            value={name}
            onChange={update('name')}
            placeholder="Name"
        />
    </label>
    <div className="errors">{errors?.password}</div>
    <label>
        <span>Password</span>
        <input type="password"
            value={password}
            onChange={update('password')}
            placeholder="Password"
        />
    </label>
    <div className="errors">
    {password !== password2 && 'Confirm Password field must match'}
    </div>
    <label>
        <span>Confirm Password</span>
        <input type="password"
            value={password2}
            onChange={update('password2')}
            placeholder="Confirm Password"
        />
    </label>
    <input
    type="submit"
    value="Sign Up"
    disabled={!email || !name || !password || password !== password2}
    />
</form>
);
}

export default SignupForm;