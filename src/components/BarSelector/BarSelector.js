import React, { useState } from 'react';
import * as classes from './BarSelector.module.css';

const BarSelector = props => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const { bars } = props;

    const onChangehandler = (e) => {
        const {onChange} = props;
        const index = Number(e.target.value);
        if (onChange) {
            onChange(index);
            setSelectedIndex(index);
        } 
    }

    return (
        <div>
            <select 
                className={classes.BarSelector}
                value={selectedIndex} 
                onChange={onChangehandler}>
                {
                    bars.map((bar, index) => (
                        <option key={index} value={index}>
                            {`#progress ${(index + 1)}`}           
                        </option>
                    ))
                }
            </select>
        </div>
    );    
}

export default BarSelector;