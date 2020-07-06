import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://muammuam.herokuapp.com/api/usuario/bares/all'
});

export default Api;