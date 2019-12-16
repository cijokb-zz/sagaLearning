import {combineReducers} from 'redux';

import errorReducer from './errorReducer';
import loadingReducer from './loadingReducer';
import imagesReducer from './imagesReducer';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imagesReducer,
    error: errorReducer
});

export default rootReducer;