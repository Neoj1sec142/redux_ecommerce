import {
    LOAD_PRODUCT_SUCCESS, LOAD_PRODUCT_FAIL,
    LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS_FAIL,
    LOAD_PURCHASE_SUCCESS, LOAD_PURCHASE_FAIL,
    LOAD_PURCHASES_SUCCESS, LOAD_PURCHASES_FAIL,
    REMOVE_PURCHASE_SUCCESS, REMOVE_PURCHASE_FAIL,
    UPLOAD_PURCHASE_SUCCESS, UPLOAD_PURCHASE_FAIL
} from '../types'
import {
    GetProducts, GetProductById, GetPurchaseById,
    GetPurchasesByUser, CreatePurchase, RemovePurchase
} from '../services/EcomServices'
import { setAlert } from './alert'

export const load_products = () => async dispatch => {
    try{
        const res = await GetProducts()
        if(res.status === 200){
            dispatch({
                type: LOAD_PRODUCTS_SUCCESS,
                payload: res.data
            })
        }else{
            console.log(res, 'error 1')
            dispatch({
                type: LOAD_PRODUCTS_FAIL
            })
        }
    }catch(err){
        console.log(err, 'error 2')
        dispatch({
            type: LOAD_PRODUCTS_FAIL
        })
    }
}

export const load_product_by_id = (id) => async dispatch => {
    try{
        const res = await GetProductById(id)
        if(res.status === 200){
            dispatch({
                type: LOAD_PRODUCT_SUCCESS,
                payload: res.data
            })
        }else{
            console.log(res, 'error 1')
            dispatch({
                type: LOAD_PRODUCT_FAIL
            })
        }
    }catch(err){
        console.log(err, 'error 2')
        dispatch({
            type: LOAD_PRODUCT_FAIL
        })
    }
}

// Purchase Actions
export const load_purchase_by_id = (id) => async dispatch => {
    try{
        const res = await GetPurchaseById(id)
        if(res.status === 200){
            dispatch({
                type: LOAD_PURCHASE_SUCCESS,
                payload: res.data
            })
        }else{
            console.log(res, 'error 1')
            dispatch({
                type: LOAD_PURCHASE_FAIL
            })
        }
    }catch(err){
        console.log(err, 'error 2')
        dispatch({
            type: LOAD_PURCHASE_FAIL
        })
    }
}
export const load_user_purchases = (user_pk) => async dispatch => {
    try{
        const res = await GetPurchasesByUser(user_pk)
        if(res.status === 200){
            dispatch({
                type: LOAD_PURCHASES_SUCCESS,
                payload: res.data
            })
        }else{
            console.log(res, 'error 1')
            dispatch({
                type: LOAD_PURCHASES_FAIL
            })
        }
    }catch(err){
        console.log(err, 'error 2')
        dispatch({
            type: LOAD_PURCHASES_FAIL
        })
    }
}
export const confirm_purchase = (purchase) => async dispatch => {
    try{
        const res = await CreatePurchase(purchase)
        if(res.status === 201 || res.statusText === 'Created'){
            dispatch({
                type: UPLOAD_PURCHASE_SUCCESS,
                payload: res.data
            })
            dispatch(setAlert('Purchase Confirmed Successfully, Thank you for your business', 'success'))
        }else{
            console.log(res, 'error 1')
            dispatch({
                type: UPLOAD_PURCHASE_FAIL
            })
            dispatch(setAlert('Error Confirming Purchase', 'error'))
        }
    }catch(err){
        console.log(err, 'error 2')
        dispatch({
            type: UPLOAD_PURCHASE_FAIL
        })
        dispatch(setAlert('Error Confirming Purchase', 'error'))
    }
}
export const delete_purchase = (id) => async dispatch => {
    try{
        const res = await RemovePurchase(id)
        if(res.status === 200 || res.statusText === 'No Content'){
            dispatch({
                type: REMOVE_PURCHASE_SUCCESS,
                payload: res.data
            })
            dispatch(setAlert('Purchase Removed Successfully', 'success'))
        }else{
            console.log(res, 'error 1')
            dispatch({
                type: REMOVE_PURCHASE_FAIL
            })
            dispatch(setAlert('Error Removing Purchase', 'error'))
        }
    }catch(err){
        console.log(err, 'error 2')
        dispatch({
            type: REMOVE_PURCHASE_FAIL
        })
        dispatch(setAlert('Error Removing Purchase', 'error'))
    }
}