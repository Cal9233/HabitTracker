import React, {useState} from 'react';
import Container from '@mui/material/Container';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import axios from 'axios';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { FormLabel, TextField } from '@mui/material';
const LoginBox = () => {
    const [textValue, setTextValue] = useState();
    const onTextChange = (e) => setTextValue(e.target.value);
    const handleSubmit = () => console.log(textValue);
    const handleReset = () => setTextValue("");

   


    const submitButton = (e) => {
        //axios
        axios.post('http://localhost:1337/email', {
            email: 'calvin@gmail.com'
        })
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
                            onChange={onTextChange}
                            value={textValue}
                            label="Email"
                        />
                        <br/>
                        <TextField
                            onChange={onTextChange}
                            value={textValue}
                            label="Password"
                        />
                        <br />
                        <Button 
                            variant="contained" 
                            onClick={handleSubmit}
                            sx={{
                                color: 'black',
                                backgroundColor: 'white',
                                borderColor: 'black'
                            }}>
                            Submit
                        </Button>
                </FormControl>
            </div>
        </Container>
    </div>
  )
}

export default LoginBox