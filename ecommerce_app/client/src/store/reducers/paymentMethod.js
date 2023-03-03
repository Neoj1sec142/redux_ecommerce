/* eslint-disable import/no-anonymous-default-export */
import {
    LOAD_PM_SUCCESS, LOAD_PM_FAIL,
    LOAD_PMS_SUCCESS, LOAD_PMS_FAIL,
    UPLOAD_PM_SUCCESS, UPLOAD_PM_FAIL,
    DESTROY_PM_SUCCESS, DESTROY_PM_FAIL,
    LOAD_ORDERS_SUCCESS, LOAD_ORDERS_FAIL
} from '../types'

const initialState = {
    paymentMethods: [],
    methodDetail: {},
    orderDetails: {},
    orders: []
}

export default function(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case LOAD_PM_SUCCESS:
            return{
                ...state,
                methodDetail: payload
            }
        case LOAD_PMS_SUCCESS:
            return{
                ...state,
                paymentMethods: payload
            }
        case LOAD_ORDERS_SUCCESS:
            return{
                ...state,
                orders: payload
            }
        case LOAD_ORDERS_FAIL:
        case DESTROY_PM_SUCCESS:
        case DESTROY_PM_FAIL:
        case UPLOAD_PM_FAIL:
        case UPLOAD_PM_SUCCESS:
        case LOAD_PM_FAIL:
        case LOAD_PMS_FAIL:
            return{...state}
        default:
            return state
    }
}