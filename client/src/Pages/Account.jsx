import React, {useContext} from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { AppContext } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';

const Account = () => {
    const api = 'http://localhost:1337';
    const { setCurrentUser } = useContext(AppContext);
    const navigate = useNavigate();
    const signOut = () => {
        axios
        .post(`${api}/user/logout`)
        .then(() => {
            setCurrentUser(null);
            localStorage.removeItem('user');
            if(setCurrentUser == null){
                navigate("/");
            }
        })
        .catch((e) => console.log("error: ", e));
    }

  return (
    <div>
        <Button variant="outlined" onClick={signOut}>Sign Out</Button>
    </div>
  )
}

export default Account