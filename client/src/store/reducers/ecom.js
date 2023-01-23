/* eslint-disable import/no-anonymous-default-export */
import {
    LOAD_PRODUCT_SUCCESS, LOAD_PRODUCT_FAIL,
    LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS_FAIL,
    LOAD_PURCHASE_SUCCESS, LOAD_PURCHASE_FAIL,
    LOAD_PURCHASES_SUCCESS, LOAD_PURCHASES_FAIL,
    REMOVE_PURCHASE_SUCCESS, REMOVE_PURCHASE_FAIL,
    UPLOAD_PURCHASE_SUCCESS, UPLOAD_PURCHASE_FAIL
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
        case LOAD_PURCHASE_SUCCESS:
            return{
                ...state,
                purchase: payload
            }
        case LOAD_PURCHASES_SUCCESS:
            return{
                ...state,
                purchases: payload
            }
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
        case LOAD_PURCHASE_FAIL:
        case LOAD_PURCHASES_FAIL:
        case REMOVE_PURCHASE_SUCCESS:
        case REMOVE_PURCHASE_FAIL:
        case UPLOAD_PURCHASE_SUCCESS:
        case UPLOAD_PURCHASE_FAIL:
        case LOAD_PRODUCT_FAIL:
        case LOAD_PRODUCTS_FAIL:
            return{...state}
        default:
            return state
    }
}