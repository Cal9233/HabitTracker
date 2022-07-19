import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import AuthService from '../services/auth-service';

const AppContext = createContext();

const AppContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [habits, setHabits] = useState([]);
    const user = AuthService.getCurrentUser();
    const api_url = 'http://localhost:1337';

    useEffect(() => {
        if(user && !currentUser){
            axios
            .get(api_url + '/user/me', { withCredentials: true })
            .then(({data}) => {
                setCurrentUser(data);
                localStorage.setItem("user", data);
            })
            .catch((e) => {
                console.log("error: ", e);
            });
        }
    } ,[currentUser, setCurrentUser, user]);

  return (
    <AppContext.Provider
        value={{
            currentUser,
            setCurrentUser,
            habits,
            setHabits
        }}
    >
        {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppContextProvider }