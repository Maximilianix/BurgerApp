import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-guide-my-burger.firebaseio.com/'
});

export default instance;