import {
    LOAD_PRODUCT_SUCCESS, LOAD_PRODUCT_FAIL,
    LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS_FAIL,
    // REMOVE_PRODUCT_SUCCESS, REMOVE_PRODUCT_FAIL,
    // UPLOAD_PRODUCT_SUCCESS, UPLOAD_PRODUCT_FAIL
} from '../types'
import {GetProducts, GetProductById} from '../services/EcomServices'

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
