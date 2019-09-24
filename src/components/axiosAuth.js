import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    console.log('in axiosWithAuth', token);

    return axios.create({
        baseURL: 'https://top-nine.herokuapp.com/api/authentication',
        headers: {
            Authorization: token
        }
    });
};