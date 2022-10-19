import axios from 'axios'
import Cookies from 'js-cookie'
import {
    LOAD_PURCHASE_SUCCESS, LOAD_PURCHASE_FAIL,
    FORMAT_PURCHASE_SUCCESS, FORMAT_PURCHASE_FAIL,
    PROCESS_PURCHASE_SUCCESS, PROCESS_PURCHASE_FAIL,
    CHECKOUT_SAVE_SUCCESS, CHECKOUT_SAVE_FAIL,
    CHECKOUT_RESTORE_SUCCESS, CHECKOUT_RESTORE_FAIL,
    CONFIRM_SAVE_SUCCESS, CONFIRM_SAVE_FAIL,
    CONFIRM_RESTORE_SUCCESS, CONFIRM_RESTORE_FAIL, HASH_FAIL,
    HASH_SUCCESS, HTTP_SALE_FAIL, HTTP_SALE_SUCCESS
    // EDIT_PURCHASE_SUCCESS, EDIT_PURCHASE_FAIL
} from '../types'

export const load_purchase = () => async dispatch => {
    try{
        const cart = JSON.parse(localStorage.getItem('cart'))
        if(cart.length){
            dispatch({
                type: LOAD_PURCHASE_SUCCESS,
                payload: cart
            })
        }else{
            dispatch({
                type: LOAD_PURCHASE_FAIL,
            })
        }
    }catch(err){
        dispatch({
            type: LOAD_PURCHASE_FAIL,
        })
    }
}

export const format_purchase = () => async dispatch => {
    try{
        let total = 0.0
        let purchase = ''
        const items = JSON.parse(localStorage.getItem('cart'))
        for(let i=0; i<items.length; i++){
            purchase += `#${items[i].id}-${items[i].qty}#`
            total += (parseFloat(items[i].price) * parseFloat(items[i].qty))
            i++
        }
        if(total !== 0 && purchase !== ''){
            dispatch({
                type: FORMAT_PURCHASE_SUCCESS,
                payload: {purchase: purchase, total: total}
            })
        }else{
            dispatch({
                type: FORMAT_PURCHASE_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: FORMAT_PURCHASE_FAIL
        })
    }
}

export const process_purchase = (purchase, total) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    }
    const body = JSON.stringify({item_qty: purchase, total: total})
    try{
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/purchase`, config, body)
        if(res.status === 200){
            dispatch({
                type: PROCESS_PURCHASE_SUCCESS
            })
        }else{
            dispatch({
                type: PROCESS_PURCHASE_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: PROCESS_PURCHASE_FAIL
        })
    }
}

export const checkout_save = (str, total) => async dispatch => {
    try{
        const data = {item_qty: str, total: total}
        localStorage.setItem('purchase', JSON.stringify(data))
        dispatch({
            type: CHECKOUT_SAVE_SUCCESS
        })
    }catch(err){
        dispatch({
            type: CHECKOUT_SAVE_FAIL
        })
    }
}

export const checkout_restore = () => async dispatch => {
    try{
        const data = JSON.parse(localStorage.getItem('purchase'))
        if(data){
            localStorage.removeItem('cart')
            dispatch({
                type: CHECKOUT_RESTORE_SUCCESS,
                payload: data
            })
        }else{
            dispatch({
                type: CHECKOUT_RESTORE_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: CHECKOUT_RESTORE_FAIL
        })
    }
}

// export const edit_purchase = () => async dispatch => {}

// //////////////////// //
// USER CONFIRM ACTIONS //
// //////////////////// //
// total, purchase, userInfo, processed

export const confirm_save = (total, purchase, userInfo, processed) => async dispatch => {
    try{
        const saved_purchase = JSON.parse(localStorage.getItem('purchase'))
        if(saved_purchase.total){
            localStorage.setItem('userInfo', JSON.stringify(userInfo))
            localStorage.setItem('processed', JSON.stringify(processed))
            dispatch({
                type: CONFIRM_SAVE_SUCCESS
            })
        }else if(total, purchase, userInfo, processed){
            localStorage.setItem('purchase', JSON.stringify({total:total, purchase:purchase}))
            localStorage.setItem('userInfo', JSON.stringify(userInfo))
            localStorage.setItem('processed', JSON.stringify(processed))
            dispatch({
                type: CONFIRM_SAVE_SUCCESS
            })
        }else{
            dispatch({
                type: CONFIRM_SAVE_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: CONFIRM_SAVE_FAIL
        })
    }
}
export const confirm_restore = () => async dispatch => {
    try{
        const totalPurchase = localStorage.getItem('purchase')
        const userInfo = localStorage.getItem('userInfo')
        const processed = localStorage.getItem('processed')
        if(totalPurchase.total && userInfo && processed){
            dispatch({
                type: CONFIRM_RESTORE_SUCCESS,
                payload: {
                    total: totalPurchase.total,
                    purchase: totalPurchase.purchase,
                    userInfo: userInfo,
                    processed: processed
                }
            })
        }else if(!totalPurchase && userInfo && processed){
            dispatch({
                type: CONFIRM_RESTORE_SUCCESS,
                payload: {
                    userInfo: userInfo,
                    processed: processed
                }
            })
        }else if(totalPurchase && userInfo && !processed){
            dispatch({
                type: CONFIRM_RESTORE_SUCCESS,
                payload: {
                    total: totalPurchase.total,
                    purchase: totalPurchase.purchase,
                    userInfo: userInfo
                }
            })
        }else if(totalPurchase && !userInfo && processed){
            dispatch({
                type: CONFIRM_RESTORE_SUCCESS,
                payload: {
                    total: totalPurchase.total,
                    purchase: totalPurchase.purchase,
                    processed: processed
                }
            })
        }else if(totalPurchase && !userInfo && !processed){
            dispatch({
                type: CONFIRM_RESTORE_SUCCESS,
                payload: {
                    total: totalPurchase.total,
                    purchase: totalPurchase.purchase
                }
            })
        }else if(!totalPurchase && !userInfo && processed){
            dispatch({
                type: CONFIRM_RESTORE_SUCCESS,
                payload: {
                    processed: processed
                }
            })
        }else if(!totalPurchase && userInfo && !processed){
            dispatch({
                type: CONFIRM_RESTORE_SUCCESS,
                payload: {
                    userInfo: userInfo
                }
            })
        }else{
            dispatch({
                type: CONFIRM_RESTORE_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: CONFIRM_RESTORE_FAIL
        })
    }
}
export const hash_format_info = () => async dispatch => {}
export const make_purchase = () => async dispatch => {}
// export const edit_purchase = () => async dispatch => {}