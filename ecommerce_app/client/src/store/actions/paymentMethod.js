import {
    LOAD_PAYMENTMETHOD_SUCCESS, LOAD_PAYMENTMETHOD_FAIL,
    LOAD_PAYMENTMETHODS_SUCCESS, LOAD_PAYMENTMETHODS_FAIL,
    UPLOAD_PAYMENTMETHOD_SUCCESS, UPLOAD_PAYMENTMETHOD_FAIL
} from '../types'
import { decryptData } from '../../utils/utils'
import { 
    GetPaymentMethodList, GetPaymentMethodDetails, CreatePaymentMethod 
} from '../services/PaymentMethodServices'

export const load_payment_method_by_id = (id) => async dispatch => {
    try{
        const res = await GetPaymentMethodDetails(id)
        let results = [];
        const methods = res.data;
        if(res.status === 200){
            for(let i=0; i<methods.length; i++){
                const data = {
                    card_owner: methods[i].card_owner,
                    description: methods[i].description,
                    is_active: methods[i].is_active,
                    is_credit_card: methods[i].is_credit_card,
                    cardholder_name: decryptData(methods[i].cardholder_name),
                    card_number: decryptData(methods[i].card_number),
                    expiration_date: decryptData(methods[i].expiration_date),
                    cvv: decryptData(methods[i].cvv)
                }
                results.push(data)
            }
            dispatch({
                type: LOAD_PAYMENTMETHOD_SUCCESS,
                payload: results
            })
        }else{
            console.log(res, "Err 1")
            console.log(res, "results")
            dispatch({
                type: LOAD_PAYMENTMETHOD_FAIL
            })
        }
    }catch(err){
        console.log(err, "Err 2")
        dispatch({
            type: LOAD_PAYMENTMETHOD_FAIL
        })
    }
}

export const load_payment_methods = (user_pk) => async dispatch => {
    try{
        const res = await GetPaymentMethodList(user_pk)
        let results = [];
        const methods = res.data;
        if(res.status === 200){
            for(let i=0; i<methods.length; i++){
                const data = {
                    card_owner: methods[i].card_owner,
                    description: methods[i].description,
                    is_active: methods[i].is_active,
                    is_credit_card: methods[i].is_credit_card,
                    expiration_mon: decryptData(methods[i].expiration_mon),
                    expiration_year: decryptData(methods[i].expiration_year)
                }
                results.push(data)
            }
            dispatch({
                type: LOAD_PAYMENTMETHODS_SUCCESS,
                payload: results
            })
        }else{
            console.log(res, "Err 1")
            console.log(res, "results")
            dispatch({
                type: LOAD_PAYMENTMETHODS_FAIL
            })
        }
    }catch(err){
        console.log(err, "Err 2")
        dispatch({
            type: LOAD_PAYMENTMETHODS_FAIL
        })
    }
}

export const upload_payment_method = (pm) => async dispatch => {
    try{
        const res = await CreatePaymentMethod(pm)
        if(res.status === 201 || res.statusText === 'Created'){
            dispatch({
                type: UPLOAD_PAYMENTMETHOD_SUCCESS
            })
        }else{
            console.log(res, "Err 1")
            dispatch({
                type: UPLOAD_PAYMENTMETHOD_FAIL
            })
        }
    }catch(err){
        console.log(err, "Err 2")
        dispatch({
            type: UPLOAD_PAYMENTMETHOD_FAIL
        })
    }
}