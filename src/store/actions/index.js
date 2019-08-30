import axios from 'axios';

import * as actionTypes from './types';

export const fetchConfigurationSuccess = (configurationData) => {
    return {
        type: actionTypes.FETCH_CONFIGURATION_SUCCESS,
        payload: configurationData
    };
}

export const fetchConfigurationFail = (errorMessage) => {
    return { 
        type: actionTypes.FETCH_CONFIGURATION_FAIL,
        payload: errorMessage
    }
}

export const fetchConfiguration = () => {
    return dispatch => {
        axios.get('http://pb-api.herokuapp.com/bars')
            .then( response => {
                console.log(response.data);
                dispatch(fetchConfigurationSuccess(response.data));                
            })
            .catch( error => {
                dispatch(fetchConfigurationFail(error.message));
            })
    }
}

export const changeSelectedBar = (selectedBarIndex) => {
    return {
        type: actionTypes.CHANGE_SELECTED_BAR,
        payload: selectedBarIndex
    };
}

export const changeBarValue = (newValue) => {
    return {
        type: actionTypes.CHANGE_BAR_VALUE,
        payload: newValue
    };
}