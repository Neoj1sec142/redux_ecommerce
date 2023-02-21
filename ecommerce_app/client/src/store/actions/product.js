import {
    LOAD_BROWSELIST_SUCCESS, LOAD_BROWSELIST_FAIL,
    LOAD_PRODUCT_SUCCESS, LOAD_PRODUCT_FAIL
} from '../types'
import {GetBrowseList, GetProductDetails} from '../services/ProductServices'

export const load_browse = () => async dispatch => {
    try{
        const res = await GetBrowseList()
        if(res.status === 200){
            dispatch({
                type: LOAD_BROWSELIST_SUCCESS,
                payload: res.data
            })
        }else{
            console.log(res, "Err 1")
            dispatch({
                type: LOAD_BROWSELIST_FAIL
            })
        }
    }catch(err){
        console.log(err, "Err 2")
        dispatch({
            type: LOAD_BROWSELIST_FAIL
        })
    }
}

export const load_product_details = (id) => async dispatch => {
    try{
        const res = await GetProductDetails(id)
        if(res.status === 200){
            dispatch({
                type: LOAD_PRODUCT_SUCCESS,
                payload: res.data
            })
        }else{
            console.log(res, "Err 1")
            dispatch({
                type: LOAD_PRODUCT_FAIL
            })
        }
    }catch(err){
        console.log(err, "Err 2")
        dispatch({
            type: LOAD_PRODUCT_FAIL
        })
    }
}