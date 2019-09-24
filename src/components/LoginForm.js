import React, { useState } from 'react';
import { axiosWithAuth } from './axiosAuth';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Input, Button } from 'reactstrap';

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
            localStorage.setItem('token', res.data.payload)
            props.history.push('profile comoenent')
        })
        .catch(err => console.log(err))
    }
    
    return(
        <div className="col-sm-6 mx-auto">
            <h4 className="mt-2">Log-in</h4>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Input 
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={inputValue.username}
                    onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={inputValue.password}
                    onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup className="text-left">
                    <Button>Submit</Button>
                </FormGroup>
            </Form>
            <div>
                <p>Don't have an account? <Link to='/register-form'>Sign Up!</Link></p>
            </div>
        </div>
    )
}

export default LoginForm