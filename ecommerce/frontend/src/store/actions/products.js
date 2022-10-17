import axios from 'axios'
import {
    LOAD_PRODUCTS_SUCCESS,
    LOAD_PRODUCTS_FAIL
} from '../types'

export const load_products = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/st/products`, config)
        if(res.status === 200){
            dispatch({
                type:
                LOAD_PRODUCTS_SUCCESS,
                payload: res.data
            })
        }else{
            dispatch({
                type: LOAD_PRODUCTS_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: LOAD_PRODUCTS_FAIL
        })
    }
}