/* eslint-disable import/no-anonymous-default-export */
import {
    LOAD_BROWSELIST_SUCCESS, LOAD_BROWSELIST_FAIL,
    LOAD_PRODUCT_SUCCESS, LOAD_PRODUCT_FAIL,
    LOAD_NEXT_SUCCESS, LOAD_NEXT_FAIL, 
    LOAD_PREV_SUCCESS, LOAD_PREV_FAIL
} from '../types'

const initialState = {
    products: [],
    next: null,
    previous: null,
    productDetail: {}
}

export default function(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case LOAD_PRODUCT_SUCCESS:
            return{
                ...state,
                productDetail: payload
            }
        case LOAD_BROWSELIST_SUCCESS:
        case LOAD_NEXT_SUCCESS:
        case LOAD_PREV_SUCCESS:
            return{
                ...state,
                products: payload.results,
                next: payload.next,
                previous: payload.previous
            }
        case LOAD_NEXT_FAIL:
        case LOAD_PREV_FAIL:
        case LOAD_PRODUCT_FAIL:
        case LOAD_BROWSELIST_FAIL:
            return{...state}
        default:
            return state
    }
}