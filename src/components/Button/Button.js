import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
    const {value, onClick} = props;

    const onClickHandler = () => {
        if(onClick) {
            onClick(value);
        }
    }
    return (
        <React.Fragment>
            <button 
                className={classes.Button}
                type="button"
                onClick={onClickHandler}
            >{value}</button>
        </React.Fragment>
    );  
}

export default Button;