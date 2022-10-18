import {
    TOTAL_SUCCESS,
    TOTAL_FAIL,
    ADD_ITEM_SUCCESS,
    ADD_ITEM_FAIL,
    SESSION_SAVE_FAIL,
    SESSION_SAVE_SUCCESS,
    SESSION_RESTORE_SUCCESS,
    SESSION_RESTORE_FAIL
} from '../types'

const format_item = (newI) => {
    const item = {
        id:newI.id,
        price:newI.price,
        qty:newI.qty
    }
    return item
}
export const total_cart = (cart) => async dispatch => {
    let total_sum = 0.00;
    try{
        cart.forEach(item => {
            total_sum = total_sum + (item.price * item.qty)
        })
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
        const res = localStorage.setItem("cart",JSON.stringify({cart}))
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

export const add_item = (newItem, oldCart) => async dispatch => {
    const item = format_item(newItem)
    const cart = [oldCart]
    cart.push(item)
    try{
        if(item && cart){
            dispatch({
                type: ADD_ITEM_SUCCESS,
                payload: cart
            })
            dispatch(session_save(cart))
            dispatch(total_cart(cart))
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
export const delete_item = (item) => async dispatch => {}