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
import { Checkbox } from '@mui/material';
import HabitButton from './HabitButton';
import HabitModal from './HabitModal';
import testData from '../services/testData.json';


//Table will contain columns
//one column is a unique habit
//column will contain 7 buttons representing the days of the week
//buttons can be toggled for completion or not
//create button that creates a new habit for user
//instantly adds that habit to habittracker

const HabitContainer = () => {

  //props to be imported from "HabitButton"

  const [data, setData] = useState([]);
  

  const HabitInfo = testData;

  

    const addData = () => {
        // const habitInfo = {
        //     id: 0,
        //     action: "",
        //     completed: false
        // }
        const habitInfo = testData;
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
          <Table sx={{ minWidth: "650px" }}>
            <TableHead>
              <TableCell component="th" scope="row">Habits</TableCell>
              <TableCell component="th" scope="row">Monday</TableCell>
              <TableCell component="th" scope="row">Tuesday</TableCell>
              <TableCell component="th" scope="row">Wendesday</TableCell>
              <TableCell component="th" scope="row">Thursday</TableCell>
              <TableCell component="th" scope="row">Friday</TableCell>
              <TableCell component="th" scope="row">Saturaday</TableCell>
              <TableCell component="th" scope="row">Sunday</TableCell>
              <TableCell component="th" scope="row">
                <Button variant="outlined" color="success" onClick={addData}>
                  +
                </Button>
                <HabitModal addData={addData}/>
              </TableCell>
            </TableHead>
            <TableBody>
              <HabitButton data={data} deleteData={deleteData} handleChange={handleChange} />
              {HabitInfo.map((habits, i) => {
                return(
                  <TableRow key={habits.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {habits.action}
                    </TableCell>
                    <TableCell component="td" scope="col">
                        <Checkbox checked={habits.monday}/>
                    </TableCell>
                    <TableCell component="td" scope="col">
                        <Checkbox checked={habits.tuesday}/>
                    </TableCell>
                    <TableCell component="td" scope="col">
                        <Checkbox checked={habits.wednesday}/>
                    </TableCell>
                    <TableCell component="td" scope="col">
                        <Checkbox checked={habits.thursday}/>
                    </TableCell>
                    <TableCell component="td" scope="col">
                        <Checkbox checked={habits.friday}/>
                    </TableCell>
                    <TableCell component="td" scope="col">
                        <Checkbox checked={habits.saturday}/>
                    </TableCell>
                    <TableCell component="td" scope="col">
                        <Checkbox checked={habits.sunday}/>
                    </TableCell>
                    <TableCell component="td" scope="col">
                        <Button 
                            variant="outlined" 
                            color="error" 
                            onClick={() => (deleteData(i))}>
                                x
                            </Button>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </div>
  )
}

export default HabitContainer