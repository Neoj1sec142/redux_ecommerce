import {
    TOTAL_SUCCESS,
    TOTAL_FAIL,
    ADD_ITEM_SUCCESS,
    ADD_ITEM_FAIL,
    SESSION_SAVE_FAIL,
    SESSION_SAVE_SUCCESS,
    SESSION_RESTORE_SUCCESS,
    SESSION_RESTORE_FAIL,
    FORMAT_SUCCESS,
    FORMAT_FAIL
} from '../types'

export const format_item = (e, qty) => {
    const item = {
        id: e.target.name,
        price: e.target.value,
        qty: qty
    }
    return item
}

export const total_cart = (cart) => async dispatch => {
    try{
        let total_sum = 0.0
        for(let i=0; i<cart.length; i++){
            total_sum += (cart[i].price * cart[i].qty)
            i++
        }
        if(total_sum !== 0.00){
            dispatch({
                type: TOTAL_SUCCESS,
                payload: total_sum
            })
        }else{
            dispatch({
                type: TOTAL_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: TOTAL_FAIL
        })
    }
    
}
export const session_save = (cart) => async dispatch => {
    try{
        const res = localStorage.setItem("cart",JSON.stringify(cart))
        console.log(res, "Session Save Cart")
        if(res.error){
            dispatch({
                type: SESSION_SAVE_FAIL
            })
        }else{
            dispatch({
                type: SESSION_SAVE_SUCCESS
            })
        }
    }catch(err){
        dispatch({
            type: SESSION_SAVE_FAIL
        })
    }
}
export const session_restore = () => async dispatch => {
    try{
        const cart = JSON.parse(localStorage.getItem('cart'))
        console.log(cart, "Session Restore Cart")
        if(cart.length){
            dispatch({
                type: SESSION_RESTORE_SUCCESS,
                payload: cart
            })
        }else{
            dispatch({
                type: SESSION_RESTORE_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: SESSION_RESTORE_FAIL
        })
    }
}

export const add_item = (item, oldCart) => async dispatch => {
    if(oldCart.length){
        try{
            
            oldCart.push(item)
            
            console.log(oldCart, "Cart Add Item")
            console.log(item, "Cart Item")
            if(item && oldCart.length){
                dispatch({
                    type: ADD_ITEM_SUCCESS,
                    payload: oldCart
                })
            }else{
                dispatch({
                    type: ADD_ITEM_FAIL
                })
            }
        }catch(err){
            dispatch({
                type: ADD_ITEM_FAIL
            })
        }
    }else{
        try{
            const cart = [];
            cart.push(item)
            console.log(cart, "Cart Add Item")
            console.log(item, "Cart Item")
            if(item && cart.length){
                dispatch({
                    type: ADD_ITEM_SUCCESS,
                    payload: cart
                })
            }else{
                dispatch({
                    type: ADD_ITEM_FAIL
                })
            }
        }catch(err){
            dispatch({
                type: ADD_ITEM_FAIL
            })
        }
    }
}
export const delete_item = (item) => async dispatch => {}