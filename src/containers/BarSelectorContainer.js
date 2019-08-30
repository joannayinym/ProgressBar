import React from 'react';
import { connect } from 'react-redux';

import BarSelector from '../components/BarSelector/BarSelector';
import {changeSelectedBar} from '../store/actions';

const BarSelectorContainer = (props) => {
    const { bars, changeSelectedBar } = props;
    return (
        <BarSelector 
            bars={bars}
            onChange={changeSelectedBar}
        />
    );
};

const mapStateToProps = state => {
    return {
        bars: state.progressBars.barValues,
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        changeSelectedBar: selectedBarIndex => dispatch(changeSelectedBar(selectedBarIndex))
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(BarSelectorContainer);