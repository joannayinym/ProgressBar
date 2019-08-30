import React from 'react';
import { connect } from 'react-redux';
import ProgressBar from '../components/ProgressBars/ProgressBars';

const BarsContainer = props => {
    const { barValues, limit } = props;

    return (
        <div>
            {
                barValues.map((value,index) => (
                    <React.Fragment key={index}>
                        <ProgressBar value={value} limit={limit} />
                    </React.Fragment>
                ))
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        barValues: state.progressBars.barValues,
        limit: state.progressBars.limit
    }
};

export default connect(mapStateToProps)(BarsContainer);