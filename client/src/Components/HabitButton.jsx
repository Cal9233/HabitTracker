import { Button, Checkbox, FormLabel, Grid, Table } from '@mui/material';
import React, {useState} from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const HabitButton = ({data, deleteData, handleChange}) => {
    const [isChecked, setIsChecked] = useState(false);

    
    // const toggle = () => {
    //     isChecked = HabitInfo.completed;
    //     setIsChecked(isChecked);
    // }

    return(
        data.map((a, i) => {
            const {id, action, completed} = a;
            return (
                <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="td" scope="col">
                        <input 
                            type="text" 
                            value={action} 
                            onChange={(e) => (handleChange(i, e))}
                            name="action"
                            className="form-control" /> 
                    </TableCell>
                    <TableCell component="td" scope="row">
                        <input 
                            type="text" 
                            value={completed} 
                            onChange={(e) => (handleChange(i, e))}
                            name="completed"
                            className="form-control" /> 
                    </TableCell>
                    <TableCell component="td" scope="row">
                        <Button 
                            variant="outlined" 
                            color="error" 
                            onClick={() => (deleteData(i))}>
                                x
                            </Button>
                    </TableCell>
                </TableRow>
            )
        })
    );


//   return (
//     <div>
//         <Grid container sx={{border: "2px solid black"}}>
//             <Grid item>
//                 <Checkbox color="success" sx={{padding: "10px"}}/>
//                 <Checkbox color="success" sx={{padding: "10px"}}/>
//                 <Checkbox color="success" sx={{padding: "10px"}}/>
//                 <Checkbox color="success" sx={{padding: "10px"}}/>
//                 <Checkbox color="success" sx={{padding: "10px"}}/>
//                 <Checkbox color="success" sx={{padding: "10px"}}/>
//                 <Checkbox color="success" sx={{padding: "10px"}}/>
//                 {/* {HabitInfo.map((val, i) => {
//                     return(
//                         <div style={{padding: '20px'}}>
//                             <FormLabel 
//                                 key={i}
//                                 label={val.action}
//                                 control={<Checkbox key={i} checked={isChecked} onClick={() => toggle()} />}
//                             />
//                         </div>
//                     );
//                 })} */}
//             </Grid>
//         </Grid>
//     </div>
//   )
}

export default HabitButton