export default function authHeader(){
    const user = JSON.parse(localStorage.getItem("user"));
    if(user && user.accessToken){
        return { 'x-access-token': user.accessToken };
    } else {
        return {};
    }
}

//checks local storage for user and returns JWT, if no user exist then return an
//empty object