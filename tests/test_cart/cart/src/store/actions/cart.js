// import data from 
import { 
    LOAD_DATA_FAIL, LOAD_DATA_SUCCESS,
    ADD_ITEM_SUCCESS, ADD_ITEM_FAIL,
    DELETE_ITEM_SUCCESS, DELETE_ITEM_FAIL,
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

export const add_item = (item) => async dispatch => {
    
}

export const delete_item = (item) => async dispatch => {}

export const total_cart = (cart) => async dispatch => {}