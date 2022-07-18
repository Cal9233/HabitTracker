import React from 'react';
import ProgressChart from '../Components/ProgressChart';
import HabitContainer from '../Components/HabitContainer';


//We want chart that shows progress
//Calender showing dates that were active and not
//add/delete/update habits


const HomePage = () => {
  return (
    <div>
      <ProgressChart />
      <HabitContainer />
    </div>
  )
}

export default HomePage