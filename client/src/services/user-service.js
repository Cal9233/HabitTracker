import axios from 'axios';
import authHeader from './auth-header';

const api_url = 'http://localhost:1337/user';
const getPublicContent = async () => {
    return await axios
    .get(api_url + '/getAllUsers')
    .catch((err) => {
        console.log("error: ", err);
    });
}




//accessing user data using authHeader for requesting authorized resources