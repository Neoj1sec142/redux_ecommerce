/* eslint-disable import/no-anonymous-default-export */
import {
    LOAD_PURCHASES_SUCCESS, LOAD_PURCHASES_FAIL,
    UPLOAD_PURCHASE_FAIL, UPLOAD_PURCHASE_SUCCESS
} from '../types'

const initialState = {
    purchases: [],
    purchaseDetail: {}
}

export default function(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case LOAD_PURCHASES_SUCCESS:
            return{
                ...state,
                PURCHASEDetail: payload
            }
        case UPLOAD_PURCHASE_SUCCESS:
        case UPLOAD_PURCHASE_FAIL:
        case LOAD_PURCHASES_FAIL:
            return{...state}
        default:
            return state
    }
}