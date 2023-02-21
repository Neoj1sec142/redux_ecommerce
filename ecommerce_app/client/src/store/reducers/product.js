/* eslint-disable import/no-anonymous-default-export */
import {
    LOAD_BROWSELIST_SUCCESS, LOAD_BROWSELIST_FAIL,
    LOAD_PRODUCT_SUCCESS, LOAD_PRODUCT_FAIL
} from '../types'

const initialState = {
    products: [],
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
            return{
                ...state,
                products: payload
            }
        case LOAD_PRODUCT_FAIL:
        case LOAD_BROWSELIST_FAIL:
            return{...state}
        default:
            return state
    }
}