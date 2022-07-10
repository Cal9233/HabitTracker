import React from 'react';
import image from '../Images/background.jpg';
import LoginBox from './LoginBox';
import ProgressChart from './ProgressChart';

const LandingPage = () => {
  return (
    <div style={{
      backgroundImage: `url(${image})`,
      objectFit: 'cover',
      width: '100vw',
      height: '100vh',
      position: 'fixed',
      }}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
          <div style={{top: '100px', position: 'relative'}}>
            <h1 style={{textAlign: 'center'}}>Habit Tracker</h1>
            <h3>In order to change your future <br/>you must change your <b>Habits</b></h3>
          </div>
          <div style={{top: '100px', position: 'relative'}}>
            <LoginBox />
          </div>
          //<ProgressChart />
        </div>
    </div>
  )
}

export default LandingPage