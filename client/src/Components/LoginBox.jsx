import React, {useState} from 'react';
import Container from '@mui/material/Container';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import axios from 'axios';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { FormLabel, TextField } from '@mui/material';

const LoginBox = () => {
    const [textValue, setTextValue] = useState("");
    const onTextChange = (e) => setTextValue(e);
    const handleSubmit = () => console.log(textValue);
    const handleReset = () => setTextValue("");

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
                <TextField
                    onChange={onTextChange}
                    value={textValue}

                />
                <br />
                <Button variant="contained" onClick={handleSubmit}>Submit</Button>
            </FormControl>
            
        </Container>
    </div>
  )
}

export default LoginBox