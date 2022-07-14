import axios from 'axios';

//service uses axios for http requests, user local storage information
// and JWT

const api_url = 'http://localhost:1337/user';
const register = async (username, password, email) => {
    return await axios
    .post(api_url + '/signup', {
        username,
        password,
        email
    }).catch((err) => {
        console.log("error: ", err);
    });
};
const login = async (username, password) => {
    return await axios
    .get(api_url + '/signin', {
        username,
        password
    })
    .then((res) => {
        if(res.data.accessToken){
            localStorage.setItem("user", JSON.stringify(res.data));
        } else {
            throw new Error("Error");
        }
        return res.data;
    }).catch((err) => {
        console.log("error: ", err);
    });
};
const logout = () => {
    localStorage.removeItem("user");
}
const getCurrentUser = () => {
    return localStorage.getItem("user");
}
const AuthService = {
    register,
    login,
    logout,
    getCurrentUser
};
export default AuthService;