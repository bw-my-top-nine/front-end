import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://top-nine.herokuapp.com/api/authentication',
        headers: {
            Authorization: token
        }
    });
};