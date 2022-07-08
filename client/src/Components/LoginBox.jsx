import React from 'react';
import Container from '@mui/material/Container';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import axios from 'axios';
import Button from '@mui/material/Button';
import { FormLabel, TextField } from '@mui/material';

const LoginBox = () => {



    const submitButton = (e) => {
        //axios
        axios.post('http://localhost:1337/email', {
            email: 'calvin@gmail.com'
        })
    }

  return (
    <div>
        <Container maxWidth="lg">
            <FormControl>
                <FormLabel>Enter your Email</FormLabel>
                <br />
                <TextField></TextField>
                <br />
                <Button variant="contained" onClick={() => submitButton('calvin.gmail.com')}>Submit</Button>
            </FormControl>
            
        </Container>
    </div>
  )
}

export default LoginBox