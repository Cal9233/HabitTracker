import React, {useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import HabitButton from './HabitButton';
import HabitModal from './HabitModal';


//Table will contain columns
//one column is a unique habit
//column will contain 7 buttons representing the days of the week
//buttons can be toggled for completion or not
//create button that creates a new habit for user
//instantly adds that habit to habittracker

const HabitContainer = () => {

  //props to be imported from "HabitButton"

  const [data, setData] = useState([]);

    const addData = () => {
        const habitInfo = {
            id: 0,
            action: "",
            completed: false
        }
        //setting new state to contian currently existing 
        //state plus what you have created
        //setData is an array containing states
        setData([...data, habitInfo]);
    }

    const deleteData = (i) => {
        //rows contains all existing data
        const rows = [...data];
        //remove state based off of id, local paramter will be
        //used as the id
        rows.splice(i, 1);
        //returning new array of data with spliced state
        //and setting it as new state
        setData(rows);
    }

    const handleChange = (i, e) => {
        const {action, value} = e.target;
        const rowsInput = [...data];
        rowsInput[i][action] = value;
        setData(rowsInput);
    }


  return (
    <div>
      <Grid container>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableCell>Habits</TableCell>
              <TableCell align="right">Monday</TableCell>
              <TableCell align="right">Tuesday</TableCell>
              <TableCell align="right">Wendesday</TableCell>
              <TableCell align="right">Thursday</TableCell>
              <TableCell align="right">Friday</TableCell>
              <TableCell align="right">Saturaday</TableCell>
              <TableCell align="right">Sunday</TableCell>
              <TableCell align="right">
                <Button variant="outlined" color="success" onClick={addData}>
                  +
                </Button>
                {/* <HabitModal addData={addData}/> */}
              </TableCell>
            </TableHead>
            <TableBody>
              <HabitButton data={data} deleteData={deleteData} handleChange={handleChange} />
              {/* {HabitInfo.map((habits, i) => {
                return(
                  <TableRow key={habits.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {habits.action}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {habits.completed}
                    </TableCell>
                  </TableRow>
                )
              })} */}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </div>
  )
}

export default HabitContainer