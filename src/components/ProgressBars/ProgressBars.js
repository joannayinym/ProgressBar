import React from 'react';
import * as classes from './ProgressBars.module.css';

const ProgressBars = props => {
    const { value, limit } = props;
    const barWidth = (value >= limit) ? 100 : Math.floor((value / limit) * 100);
    const barColor = (value >= limit) ? '#F82400' : '#B2D7E6';

    return (
        <div className={classes.BarBox}>
            <div 
                className={classes.ProgressBar}
                style={{width:`${barWidth}%`, background: `${barColor}`}}
            >
                <span className={classes.BarSpan}>{`${value}%`}</span>
            </div>
        </div>
    );    
}

export default ProgressBars;