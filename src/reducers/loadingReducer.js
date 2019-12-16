import * as types from '../actionTypes';

const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case types.IMAGES.LOAD:
            return true;
        case types.IMAGES.LOAD_SUCCESS:
            return false;
        case types.IMAGES.LOAD_FAIL:
            return false;
        default:
            return state;
    }

};


export default loadingReducer;