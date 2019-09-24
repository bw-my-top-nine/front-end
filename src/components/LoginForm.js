import React, { useState } from 'react';
import { axiosWithAuth } from './axiosAuth';
import { Link } from 'react-router-dom';

const LoginForm = (props) => {
    console.log(props);
    const [inputValue, setInputValue] = useState({usename: '', password: ''})
    //sets input values from form into inputValue
    const handleChange = e => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value
        })
    }
    //takes in username and password and gives key to go to profile page
    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post('/login', inputValue)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.token)
            props.history.push('/home')
        })
        .catch(err => console.log(err))
    }
    
    return(
        <div>
            Login
            <form onSubmit={handleSubmit}>
                <input 
                type='text'
                name='username'
                placeholder='Username'
                value={inputValue.username}
                onChange={handleChange}
                />
                <input
                type='password'
                name='password'
                placeholder='Password'
                value={inputValue.password}
                onChange={handleChange}
                />
                <button>Submit</button>
            </form>
            <div>
                <Link to='/register-form'>Sign Up!</Link>
            </div>
        </div>
    )
}

export default LoginForm