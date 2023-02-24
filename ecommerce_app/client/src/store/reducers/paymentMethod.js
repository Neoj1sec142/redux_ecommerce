/* eslint-disable import/no-anonymous-default-export */
import {
    LOAD_PAYMENTMETHOD_SUCCESS, LOAD_PAYMENTMETHOD_FAIL,
    LOAD_PAYMENTMETHODS_SUCCESS, LOAD_PAYMENTMETHODS_FAIL,
    UPLOAD_PAYMENTMETHOD_SUCCESS, UPLOAD_PAYMENTMETHOD_FAIL
} from '../types'

const initialState = {
    paymentMethods: [],
    methodDetail: {}
}

export default function(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case LOAD_PAYMENTMETHOD_SUCCESS:
            return{
                ...state,
                methodDetail: payload
            }
        case LOAD_PAYMENTMETHODS_SUCCESS:
            return{
                ...state,
                paymentMethods: payload
            }
        case UPLOAD_PAYMENTMETHOD_FAIL:
        case UPLOAD_PAYMENTMETHOD_SUCCESS:
        case LOAD_PAYMENTMETHOD_FAIL:
        case LOAD_PAYMENTMETHODS_FAIL:
            return{...state}
        default:
            return state
    }
}