// import data from 
import { 
    LOAD_DATA_FAIL, LOAD_DATA_SUCCESS,
    ADD_ITEM_SUCCESS, ADD_ITEM_FAIL,
    // DELETE_ITEM_SUCCESS, DELETE_ITEM_FAIL,
    TOTAL_SUCCESS, TOTAL_FAIL
} from '../types'

export const get_data = () => async dispatch => {
    try{
        const data = require('../../components/data.json')
        if(data.length){
            dispatch({
                type: LOAD_DATA_SUCCESS,
                payload: data
            })
        }else{
            dispatch({
                type: LOAD_DATA_FAIL
            })
        }
    }catch(err){

    }
}

export const total_cart = (cartItems) => async dispatch => {
    let total = 0
    cartItems.forEach((item) => (
        total += (item.price * item.qty)
    ))
    if(total !== 0){
        dispatch({
            type: TOTAL_SUCCESS,
            payload: total
        })
    }else{
        dispatch({
            type: TOTAL_FAIL,
            payload: total
        })
    }
}

export const add_item = (item, cartItems) => async dispatch => {
    const itemDict = {id: item.id, price: item.price, qty: item.qty}
    try{
        const res = cartItems.push(itemDict)
        if(res.length){
            total_cart(res)
            dispatch({
                type: ADD_ITEM_SUCCESS,
                payload: res
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

export const delete_item = (item) => async dispatch => {}

