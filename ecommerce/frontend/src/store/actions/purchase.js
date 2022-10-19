import axios from 'axios'
import Cookies from 'js-cookie'
import {
    LOAD_PURCHASE_SUCCESS, LOAD_PURCHASE_FAIL,
    FORMAT_PURCHASE_SUCCESS, FORMAT_PURCHASE_FAIL,
    PROCESS_PURCHASE_SUCCESS, PROCESS_PURCHASE_FAIL,
    CHECKOUT_SAVE_SUCCESS, CHECKOUT_SAVE_FAIL,
    CHECKOUT_RESTORE_SUCCESS, CHECKOUT_RESTORE_FAIL
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
