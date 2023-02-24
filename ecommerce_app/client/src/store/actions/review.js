import {
    UPLOAD_REVIEW_SUCCESS, UPLOAD_REVIEW_FAIL, DESTROY_REVIEW_SUCCESS, DESTROY_REVIEW_FAIL
} from '../types'
import {CreateReview, RemoveReview} from '../services/ReviewServices'

export const upload_review = (review) => async dispatch => {
    try{
        const res = await CreateReview(review)
        if(res.status === 200){
            dispatch({
                type: UPLOAD_REVIEW_SUCCESS
            })
        }else{
            console.log(res, "Err 1")
            dispatch({
                type: UPLOAD_REVIEW_FAIL
            })
        }
    }catch(err){
        console.log(err, "Err 1")
        dispatch({
            type: UPLOAD_REVIEW_FAIL
        })
    }
}

export const destroy_review = (id) => async dispatch => {
    try{
        const res = await RemoveReview(id)
        if(res.status === 204 || res.statusText === 'No Content'){
            dispatch({
                type: DESTROY_REVIEW_SUCCESS
            })
        }else{
            console.log(res, "Err 1")
            dispatch({
                type: DESTROY_REVIEW_FAIL
            })
        }
    }catch(err){
        console.log(err, "Err 1")
        dispatch({
            type: DESTROY_REVIEW_FAIL
        })
    }
}