/* eslint-disable import/no-anonymous-default-export */
import {
    LOAD_PRODUCT_SUCCESS, LOAD_PRODUCT_FAIL,
    LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS_FAIL,
    // REMOVE_PRODUCT_SUCCESS, REMOVE_PRODUCT_FAIL,
    // UPLOAD_PRODUCT_SUCCESS, UPLOAD_PRODUCT_FAIL
} from '../types'

const initialState = {
    product: {},
    products: [],
    purchase: {},
    purchases: []
}

export default function(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case LOAD_PRODUCT_SUCCESS:
            return{
                ...state,
                product: payload
            }
        case LOAD_PRODUCTS_SUCCESS:
            return{
                ...state,
                products: payload
            }
        case LOAD_PRODUCT_FAIL:
        case LOAD_PRODUCTS_FAIL:
            return{...state}
        default:
            return state
    }
}