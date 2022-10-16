/* eslint-disable import/no-anonymous-default-export */
import {
    ADD_ITEM_SUCCESS,
    ADD_ITEM_FAIL,
    DELETE_ITEM_SUCCESS,
    DELETE_ITEM_FAIL,
    TOTAL_SUCCESS, 
    TOTAL_FAIL,
    LOAD_DATA_SUCCESS,
    LOAD_DATA_FAIL
} from '../types'


const initialState = {
    products: [],
    cartItems: [],
    cartTotal: 0
}

export default function(state= initialState, action){
    const { type, payload } = action
    switch(type){
        case TOTAL_SUCCESS:
            return{
                ...state,
                cartTotal: payload
            }
        case ADD_ITEM_SUCCESS:
            return{
                ...state,
                cartItems: payload.items
            }
        case LOAD_DATA_SUCCESS:
            return {
                ...state,
                products: payload
            }
        case TOTAL_FAIL:
        case LOAD_DATA_FAIL:
            return {...state}
        default:
            return state
    }
}