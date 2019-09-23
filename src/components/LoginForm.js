import React from 'react';

const LoginForm = () => {
    return(
        <div>
            Login
            <form>
                <input 
                type='text'
                name='name'
                placeholder='Name'
                />
                <input
                type='password'
                name='password'
                placeholder='Password'
                />
            </form>
        </div>
    )
}

export default LoginForm