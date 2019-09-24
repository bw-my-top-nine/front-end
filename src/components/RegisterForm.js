import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = (props) => {
    console.log(props)
    const [credentials, setCredentials] = useState({username: '', password: ''})
    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Creds inside Submit', credentials);
        console.log('Props inside Submit', props)
        axios.post('https://top-nine.herokuapp.com/api/authentication/register', credentials)
        .then(res => {
            console.log(res.data)
            props.history.push('/')
        })
        .catch(err => console.log(err))
    }
    return(
        <div>
            Register Now!
            <form onSubmit={handleSubmit}>
                Name
                <input 
                type='text'
                name='username'
                placeholder='Username'
                value={credentials.username}
                onChange={handleChange}
                />
                Password
                <input 
                type='password'
                name='password'
                placeholder='Password'
                value={credentials.password}
                onChange={handleChange}
                />
                {/*
                Confirm Password
                <input
                type='password'
                name='password-comform'
                placeholder='Confirm Password'
                />
                */}
                <button>Submit</button>
            </form>
        </div>
    )
}

export default RegisterForm;