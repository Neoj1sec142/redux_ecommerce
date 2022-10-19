/* eslint-disable import/no-anonymous-default-export */
import { 
    LOAD_PURCHASE_SUCCESS, LOAD_PURCHASE_FAIL,
    FORMAT_PURCHASE_SUCCESS, FORMAT_PURCHASE_FAIL,
    PROCESS_PURCHASE_SUCCESS, PROCESS_PURCHASE_FAIL,
    EDIT_PURCHASE_SUCCESS, EDIT_PURCHASE_FAIL
} from '../types'

const initialState = {
    purchaseInit: [],
    total: 0.00,
    purchase: ''
}

export default function(state= initialState, action){
    const { type, payload } = action
    switch(type){
        case LOAD_PURCHASE_SUCCESS:
            return{
                ...state,
                purchaseInit: payload
            }
        case FORMAT_PURCHASE_SUCCESS:
            return{
                ...state,
                total: payload.total,
                purchase: payload.purchase
            }
        case EDIT_PURCHASE_SUCCESS:
            return{
                ...state,
                purchaseInit: payload
            }
        case PROCESS_PURCHASE_SUCCESS:
        case LOAD_PURCHASE_FAIL:
        case FORMAT_PURCHASE_FAIL:
        case PROCESS_PURCHASE_FAIL:
        case EDIT_PURCHASE_FAIL:
            return{...state}
        default:
            return {...state}
    }
}

