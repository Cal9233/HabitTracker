import { Button, FormControl, FormLabel, Grid, TextField } from '@mui/material';
import { Container } from '@mui/system';
import React, {useState, useContext} from 'react';
import { AppContext } from '../Context/AppContext';
import axios from 'axios';

const SignUp = ({history}) => {

    const user = {
        name: "",
        email: "",
        password: ""
    }

    //Fields
    const [userData, setUserData] = useState(user);
    const { setCurrentUser } = useContext(AppContext);
    const api = 'http://localhost:1337';

    //checks if succeedd or failed
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

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
        .post(api + '/user/register', userData)
        .then((data) => {
            localStorage.setItem('user', data);
            setCurrentUser(data);
            history.push('/Home');
        })
        .catch(e => console.log(e));
    }

    //show success message
    const successPopUp = () => {
        return(
            <div style={{
                display: success ? '' : 'none'
            }}>
                <h3>Success! {userData.name} Lets start tracking!</h3>
            </div>
        );
    }

    //show error message
    const errorPopUp = () => {
        return(
            <div style={{
                display: error ? '' : 'none'
            }}>
                <h3>Please enter all the fields</h3>
            </div>
        );
    }


  return (
    <>
    {/* <div style={{display: 'flex', alignItems: 'center'}}>
        <Container maxWidth='lg'>
            <form onSubmit={(e) => onSubmit(e)}>
                <FormControl>
                    <FormLabel sx={{color: "black", textAlign: "center", fontSize: "40px"}}>User Registration</FormLabel>
                    <br />
                    <TextField name="email" label="Email" onChange={handleInputChange} value={userData.email} type="email"/>
                    <br />
                    <TextField name="name" label="Username" onChange={handleInputChange} value={userData.name} type="text"/>
                    <br />
                    <TextField name="password" label="Password" onChange={handleInputChange} value={userData.password} type="password"/>
                    <br />
                    <Button 
                    sx={{color: "black", 
                    backgroundColor: "white", 
                    borderColor: "white"}}
                    variant="contained"
                    onClick={onSubmit}
                    type="submit"
                    >SignUp</Button>
                </FormControl>
            </form>
        </Container>
    </div> */}
    <Container maxWidth='lg'>
        <form onSubmit={(e) => onSubmit(e)}>
            <Grid container alignItems="center" justify="center" direction="column">
                <FormLabel sx={{color: "black", textAlign: "center", fontSize: "40px"}}>User Registration</FormLabel>
                <Grid item>
                    <FormControl>
                        <TextField name="email" label="Email" onChange={handleInputChange} value={userData.email} type="email" />
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl>
                        <TextField name="name" label="Username" onChange={handleInputChange} value={userData.name} type="text"/>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl>
                    <TextField name="password" label="Password" onChange={handleInputChange} value={userData.password} type="password"/>
                    </FormControl>
                </Grid>
                <Button 
                    sx={{color: "black", 
                    backgroundColor: "white", 
                    borderColor: "white"}}
                    variant="contained"
                    onClick={onSubmit}
                    type="submit"
                    >SignUp</Button>
            </Grid>
        </form>
    </Container>
    </>
  )
}

export default SignUp