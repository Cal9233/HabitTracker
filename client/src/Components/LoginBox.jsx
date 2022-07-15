import React, {useState, useContext} from 'react';
import Container from '@mui/material/Container';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import axios from 'axios';
import Button from '@mui/material/Button';
import { AppContext } from '../Context/AppContext';
import { FormLabel, TextField } from '@mui/material';
import {Link} from 'react-router-dom';

const LoginBox = ({history}) => {
    const user = {
        name: "",
        email: "",
        password: ""
    }

    const [userData, setUserData] = useState(user);
    const { setCurrentUser } = useContext(AppContext);
    const api = 'http://localhost:1337';

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        e.preventDefault();
        setUserData({
            ...userData,
            [name]: value
        })
    }

   

    const onSubmit = (e) => {
        e.preventDefault();

        axios
        .post(api + '/user/login', userData)
        .then((data) => {
            localStorage.setItem('user', data);
            setCurrentUser(data);
            if(data){
                history.push('/Home');
            }
        })
        .catch(e => console.log(e));
    }

  return (
    <div style={{
        border: '2px black solid',
        padding: '50px',
        borderRadius: '20%'
        }}>
        <Container maxWidth="lg">
            <div>
                <FormControl>
                    <FormLabel sx={{color: "black", textAlign: 'center', fontSize: '40px'}}>Login</FormLabel>
                        <br />
                        <TextField
                            name="email"
                            onChange={handleInputChange}
                            value={userData.email}
                            label="Email"
                            type="email"
                        />
                        <br/>
                        <TextField
                            name="password"
                            onChange={handleInputChange}
                            value={userData.password}
                            label="Password"
                        />
                        <br />
                        <Button 
                            variant="contained" 
                            onClick={onSubmit}
                            type="submit"
                            sx={{
                                color: 'black',
                                backgroundColor: 'white',
                                borderColor: 'black'
                            }}>
                            Submit
                        </Button>
                        <br />
                        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center'}}>
                            <div>------------------</div>
                            <h3><strong>OR</strong></h3>
                            <div>------------------</div>
                        </div>
                        <div style={{textAlign: "center"}}>
                            <Link to="/SignUp">Sign Up</Link>
                        </div>
                </FormControl>
            </div>
        </Container>
    </div>
  )
}

export default LoginBox