import {
    TOTAL_SUCCESS,
    TOTAL_FAIL,
    ADD_ITEM_SUCCESS,
    ADD_ITEM_FAIL,
    SESSION_SAVE_FAIL,
    SESSION_SAVE_SUCCESS,
    SESSION_RESTORE_SUCCESS,
    SESSION_RESTORE_FAIL,
    // FORMAT_SUCCESS,
    // FORMAT_FAIL,
    DELETE_ITEM_SUCCESS,
    DELETE_ITEM_FAIL
} from '../types'

export const format_item = (e, qty) => {
    const item = {
        id: e.target.name,
        price: e.target.value,
        qty: qty
    }
    return item
}

export const total_cart = (cart) => {
    try{
        let total_sum = 0.0
        cart.forEach(item => {
            total_sum = total_sum + (item.price * item.qty)
        })
        console.log(total_sum)
        return total_sum
        // if(total_sum !== 0.0){
        //     dispatch({
        //         type: TOTAL_SUCCESS,
        //         payload: total_sum
        //     })
        // }else{
        //     dispatch({
        //         type: TOTAL_FAIL
        //     })
        // }
    }catch(err){
        // dispatch({
        //     type: TOTAL_FAIL
        // })
        console.log(err, 'total err')
    }
    
}
export const session_save = (cart) => async dispatch => {
    try{
        const res = localStorage.setItem("cart",JSON.stringify(cart))
        // console.log(res, "Session Save Cart")
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
        // console.log(cart, "Session Restore Cart")
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
            // console.log(oldCart, "Cart Add Item")
            // console.log(item, "Cart Item")
            if(item && oldCart.length){
                localStorage.removeItem('cart')
                localStorage.setItem("cart",JSON.stringify(oldCart))
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
            // console.log(cart, "Cart Add Item")
            // console.log(item, "Cart Item")
            if(item && cart.length){
                localStorage.removeItem('cart')
                localStorage.setItem("cart",JSON.stringify(cart))
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
export const delete_item = (item, cart) => async dispatch => {
    try{
        const newCart = cart.filter(c => c.id !== item.id)
        localStorage.removeItem('cart')
        localStorage.setItem('cart', JSON.stringify(newCart))
        if(newCart){
            dispatch({
                type: DELETE_ITEM_SUCCESS,
                payload: newCart
            })
        }else{
            dispatch({
                type: DELETE_ITEM_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: DELETE_ITEM_FAIL
        })
    }
}