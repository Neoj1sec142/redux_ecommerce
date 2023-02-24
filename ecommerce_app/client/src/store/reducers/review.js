/* eslint-disable import/no-anonymous-default-export */
import {
    UPLOAD_REVIEW_SUCCESS, UPLOAD_REVIEW_FAIL,
    DESTROY_REVIEW_SUCCESS, DESTROY_REVIEW_FAIL
} from '../types'

const initialState = {
    reviews: [],
}

export default function(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case UPLOAD_REVIEW_FAIL:
        case UPLOAD_REVIEW_SUCCESS:
        case DESTROY_REVIEW_SUCCESS:
        case DESTROY_REVIEW_FAIL:
            return{...state}
        default:
            return state
    }
}