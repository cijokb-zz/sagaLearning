import * as types from '../actionTypes';

const imagesReducer = (state=[],action)=>{
    if(action.type === types.IMAGES.LOAD_SUCCESS){
        return [...state,...action.images];
    }
    return state;
};
export default imagesReducer;