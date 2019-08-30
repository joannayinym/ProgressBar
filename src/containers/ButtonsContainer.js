import React from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';

import { changeBarValue } from '../store/actions';
import Button from '../components/Button/Button';

const buttonContainer = (props) => {
    const { buttons, error } = props;
    let errString = '';
    let buttonString = '';
    if (error) { errString = 'Something went wrong: ' + error; }
    if (!error) {
        buttonString = buttons.map(button => (
            <React.Fragment key={shortid.generate()}>
            <Button 
                key={shortid.generate()}
                value={button}
                onClick={props.changeBarValue}
            />
        </React.Fragment>
        ))
    }
    return (
        <div>
            {errString}
            {buttonString}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        buttons: state.progressBars.buttons,
        error: state.progressBars.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeBarValue: value => dispatch(changeBarValue(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(buttonContainer);