import {
    LOAD_PURCHASES_SUCCESS, LOAD_PURCHASES_FAIL,
    UPLOAD_PURCHASE_FAIL, UPLOAD_PURCHASE_SUCCESS
} from '../types'
import { CreatePurchase, GetPurchases } from '../services/PurchaseServices'

export const upload_purchase = (pur) => async dispatch => {
    try{
        const res = await CreatePurchase(pur)
        if(res.status === 201 || res.statusText === 'Created'){
            dispatch({
                type: UPLOAD_PURCHASE_SUCCESS
            })
        }else{
            console.log(res, "Err 1")
            dispatch({
                type: UPLOAD_PURCHASE_FAIL
            })
        }
    }catch(err){
        console.log(err, "Err 2")
        dispatch({
            type: UPLOAD_PURCHASE_FAIL
        })
    }
}
export const load_user_purchases = (id) => async dispatch => {}
export const load_purchases = () => async dispatch => {
    try{
        const res = await GetPurchases()
        if(res.status === 200){
            dispatch({
                type: LOAD_PURCHASES_SUCCESS
            })
        }else{
            console.log(res, "Err 1")
            dispatch({
                type: LOAD_PURCHASES_FAIL
            })
        }
    }catch(err){
        console.log(err, "Err 2")
        dispatch({
            type: LOAD_PURCHASES_FAIL
        })
    }
}