import { Button, FormControl, FormLabel, TextField } from '@mui/material'
import { Container } from '@mui/system'
import React, {useState} from 'react'

const SignUp = () => {
    //Fields
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    //checks if succeedd or failed
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    //Handle namgeChange
    const nameOnChange = (e) =>{
        setName(e.target.value);
        setSuccess(false);
    }

    //handle email change
    const emailOnChange = (e) => {
        setEmail(e.target.value);
        setSuccess(false);
    }

    //handle password change
    const passwordOnChange = (e) => {
        setPassword(e.target.value);
        setSuccess(false);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(name == '' || password == '' || email == ''){
            setError(true);
        } else {
            setSuccess(true);
            setError(false);
        }
    }

    //show success message
    const successPopUp = () => {
        return(
            <div style={{
                display: success ? '' : 'none'
            }}>
                <h3>Success! {name}, lets start tracking!</h3>
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
    <Container maxWidth='lg'>
        <div className='messages'>
            {successPopUp()}
            {errorPopUp()}
        </div>
        <FormControl>
            <FormLabel sx={{color: "black", textAlign: "center", fontSize: "40px"}}>User Registration</FormLabel>
            
                <br />
                <TextField label="Email" onChange={emailOnChange} value={email} type="text"/>
                <br />
                <TextField label="Username" onChange={nameOnChange} value={name} type="text"/>
                <br />
                <TextField label="Password" onChange={passwordOnChange} value={password} type="text"/>
                <br />
            <Button 
            sx={{color: "black", 
            backgroundColor: "white", 
            borderColor: "white"}}
            variant="contained"
            onClick={onSubmit}
            >SignUp</Button>
        </FormControl>
    
    </Container>
    </>
  )
}

export default SignUp