import React, {useState} from 'react';
import Modal from "@mui/material/Modal";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';

//Will be passing name props to habit button

const HabitModal = ({addData}) => {

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
        title: ''
    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [title, setTitle] = useState(newHabit);

    const handleChange = (e) => {
        const {name, value} = e.target;
        e.preventDefault();
        setTitle({
            ...title,
            [name]: value
        });
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
                    defaultValue={newHabit.title} 
                    onChange={handleChange}
                    name="title"/>
                <Button 
                    variant="outlined" 
                    color="success" 
                    onClick={() => (addData)}>
                        Create
                </Button>
            </Box>
        </Modal>
    </div>
  )
}

export default HabitModal