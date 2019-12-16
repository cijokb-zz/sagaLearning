import * as types from '../actionTypes';

export const loadImages= ()=>({
    type: types.IMAGES.LOAD
});

export const setImages=(images)=>({
    type: types.IMAGES.LOAD_SUCCESS,
    images
});

export const setError=(error)=>({
    type:types.IMAGES.LOAD_FAIL,
    error
});