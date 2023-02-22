/* eslint-disable import/no-anonymous-default-export */
import {
    LOAD_PRODUCT_SUCCESS, LOAD_PRODUCT_FAIL,
    LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS_FAIL,
    LOAD_PURCHASE_SUCCESS, LOAD_PURCHASE_FAIL,
    LOAD_PURCHASES_SUCCESS, LOAD_PURCHASES_FAIL,
    REMOVE_PURCHASE_SUCCESS, REMOVE_PURCHASE_FAIL,
    UPLOAD_PURCHASE_SUCCESS, UPLOAD_PURCHASE_FAIL,
    LOAD_REVIEW_SUCCESS, LOAD_REVIEW_FAIL,
    LOAD_REVIEWS_SUCCESS, LOAD_REVIEWS_FAIL,
    REMOVE_REVIEW_SUCCESS, REMOVE_REVIEW_FAIL,
    UPLOAD_REVIEW_SUCCESS, UPLOAD_REVIEW_FAIL,
    LOAD_PURCHASEITEMS_SUCCESS, LOAD_PURCHASEITEMS_FAIL
} from '../types'

const initialState = {
    product: {},
    products: [],
    purchase: {},
    purchaseItems: [],
    purchases: [],
    reviews: [],
    review: {}
}

export default function(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case LOAD_PURCHASEITEMS_SUCCESS:
            return{
                ...state,
                purchaseItems: payload
            }
        case LOAD_REVIEWS_SUCCESS:
            return{
                ...state,
                reviews: payload
            }
        case LOAD_REVIEW_SUCCESS:
            return{
                ...state,
                review: payload
            }
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
        case LOAD_PURCHASEITEMS_FAIL:
        case LOAD_REVIEW_FAIL:
        case LOAD_REVIEWS_FAIL:
        case REMOVE_REVIEW_SUCCESS:
        case REMOVE_REVIEW_FAIL:
        case UPLOAD_REVIEW_SUCCESS:
        case UPLOAD_REVIEW_FAIL:
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