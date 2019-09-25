import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = (props) => {
    console.log(props)
    const [credentials, setCredentials] = useState({email: '', password: ''})
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
            console.log(res)
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
                type='email'
                name='email'
                placeholder='name@email.com'
                value={credentials.email}
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
                <button>Submit</button>
            </form>
        </div>
    )
}

export default RegisterForm;