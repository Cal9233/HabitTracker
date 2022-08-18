import React, {useState} from 'react';
import Modal from "@mui/material/Modal";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import axios from 'axios';
import testData from '../services/testData.json';

//Will be passing name props to habit button
//Have to use AppContext to pass name

const HabitModal = () => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    }

    const newHabit = {
        id: 0,
        action: "",
        completed: false
    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const api = 'http://localhost:1337';
    const [title, setTitle] = useState(newHabit);

    const handleChange = (e) => {
        const {name, defaultValue} = e.target;
        e.preventDefault();
        setTitle({
            ...title,
            [name]: defaultValue
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();

        axios.post(api + '/habits', title)
        .then((data) => {
            console.log("data: ", data);
            setTitle({...data});
        })
        .catch((e) => console.log("error: ", e));
        handleClose(true);
    }


  return (
    <div>
        <Button onClick={handleOpen}>Create Habit</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    New Habit
                </Typography>
                <TextField 
                    type="text" 
                    defaultValue={newHabit.action} 
                    onChange={handleChange}
                    name="title"/>
                <Button 
                    variant="outlined" 
                    color="success" 
                    onClick={onSubmit}>
                        Create
                </Button>
            </Box>
        </Modal>
    </div>
  )
}

export default HabitModal