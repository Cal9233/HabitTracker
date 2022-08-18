import { Button, FormControl, FormLabel, Grid, TextField, Card, CardContent, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, {useState, useContext} from 'react';
import { AppContext } from '../Context/AppContext';
import axios from 'axios';
import image from '../Images/background.jpg';
import { useNavigate } from 'react-router-dom';

const SignUp = ({history}) => {

    const user = {
        name: "",
        email: "",
        password: "",
        user_type_id: Math.random()
    }

    //Fields
    const [userData, setUserData] = useState(user);
    const { setCurrentUser } = useContext(AppContext);
    const api = 'http://localhost:1337';
    const navigate = useNavigate();

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
            navigate('/Home');
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
    <div style={{
        padding: '50px',
        display: 'flex', 
        alignItems: 'center',
        justifyItems: 'center',
        backgroundImage: `url(${image})`,
        objectFit: 'cover',
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        //justifyContent: 'center'
    }}>
        <Container maxWidth='lg'>
            <Card style={{maxWidth: 450, margin: "0 auto", padding: "20px 5px"}}>
                <CardContent>
                    
                        <form onSubmit={(e) => onSubmit(e)}>
                            <Grid container spacing={3} alignItems="center" justify="center" direction="column">
                                <FormLabel sx={{color: "black", textAlign: "center", fontSize: "40px", padding: "10px"}}>User Registration</FormLabel>
                                <Typography gutterBottom variant="h8" align="center">Please enter your information below</Typography>
                                <Grid item xs={12} sm={6}>
                                    <FormControl sx={{padding: '10px'}}>
                                        <TextField name="email" label="Email" onChange={handleInputChange} value={userData.email} type="email" fullWidth required/>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl sx={{padding: '10px'}}>
                                        <TextField name="name" label="Username" onChange={handleInputChange} value={userData.name} type="text" fullWidth required/>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl sx={{padding: '10px'}}>
                                        <TextField name="password" label="Password" onChange={handleInputChange} value={userData.password} type="password" fullWidth required/>
                                    </FormControl>
                                </Grid>
                                <Grid item> 
                                    <Button 
                                        sx={{
                                            color: "black", 
                                            backgroundColor: "white", 
                                            borderColor: "white"
                                        }}
                                        variant="contained"
                                        onClick={onSubmit}
                                        type="submit"
                                        fullWidth
                                        required
                                    >SignUp</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
        </Container>
    </div>
  )
}

export default SignUp