import { combineReducers } from 'redux';
import progressBarsReducer from './ProgressBars';

export default combineReducers({
    progressBars: progressBarsReducer,
});
