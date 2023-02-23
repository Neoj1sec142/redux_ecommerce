import {
    LOAD_BROWSELIST_SUCCESS, LOAD_BROWSELIST_FAIL,
    LOAD_PRODUCT_SUCCESS, LOAD_PRODUCT_FAIL,
    LOAD_NEXT_SUCCESS, LOAD_NEXT_FAIL, 
    LOAD_PREV_SUCCESS, LOAD_PREV_FAIL
} from '../types'
import {GetBrowseList, GetProductDetails, BroswePage} from '../services/ProductServices'

export const handle_page = (c, route) => async dispatch => {
    if(c === 'P' || c === 'p'){
        try{
            const res = await BroswePage(route)
            if(res.status === 200){
                dispatch({
                    type: LOAD_PREV_SUCCESS,
                    payload: res.data
                })
            }else{
                console.log(res, "Err 1")
                dispatch({
                    type: LOAD_PREV_FAIL
                })
            }
        }catch(err){
            console.log(err, "Err 2")
            dispatch({
                type: LOAD_PREV_FAIL
            })
        }
    }
    if(c === 'N' || c === 'n'){
        try{
            const res = await BroswePage(route)
            if(res.status === 200){
                dispatch({
                    type: LOAD_NEXT_SUCCESS,
                    payload: res.data
                })
            }else{
                console.log(res, "Err 1")
                dispatch({
                    type: LOAD_NEXT_FAIL
                })
            }
        }catch(err){
            console.log(err, "Err 2")
            dispatch({
                type: LOAD_NEXT_FAIL
            })
        }
    }
}

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