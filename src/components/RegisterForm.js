import React from 'react';

const RegisterForm = () => {
return(
    <div>
        Register Now!
        <form>
            Name
            <input 
            type='text'
            name='name'
            placeholder='Name'
            />
            Email
            <input 
            type='name'
            name='email'
            placeholder='name@email.com'
            />
            Password
            <input 
            type='password'
            name='password'
            placeholder='Password'
            />
            Confirm Password
            <input
            type='password'
            name='password-comform'
            placeholder='Confirm Password'
            />
            <button>Submit</button>
        </form>
    </div>
)
}

export default RegisterForm;