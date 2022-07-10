import React from 'react';
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressChart = () => {
    const percentage2 = 66;
    const percentage1 = 88;
  return (
    <div style={{ width: 200, height: 200 }}>
        <CircularProgressbarWithChildren
            value={percentage2}
            text={`${percentage2}%`}
            strokeWidth={8}
            styles={buildStyles({
                pathColor: 'blue'
            })}    
        >
            <CircularProgressbar 
                value={percentage1} 
                text={`${percentage1}%`}
                styles={buildStyles({
                    rotation: 0.7,
                    strokeLinecap: 'round',
                    textSize: '20px',
                    pathTransition: 0.5,
                    pathColor: `rgba(62, 152, 199, ${percentage1 / 100})`,
                    textColor: '#f88',
                    trailColor: 'transparent',
                    backgroundColor: '#3e98c7',
                })}
            />
        </CircularProgressbarWithChildren>
        
    </div>
  )
}

export default ProgressChart