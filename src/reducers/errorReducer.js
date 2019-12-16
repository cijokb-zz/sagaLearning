import * as types from '../actionTypes';

const errorReducer = (state = null, action) => {
    switch (action.type) {
        case types.IMAGES.LOAD:
        case types.IMAGES.LOAD_SUCCESS:
            return null;
        case types.IMAGES.LOAD_FAIL:
            return false;
        default:
            return state;
    }

};

export default errorReducer;