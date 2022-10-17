/* eslint-disable import/no-anonymous-default-export */
import { 
    LOAD_PRODUCTS_SUCCESS,
    LOAD_PRODUCTS_FAIL
} from '../types'

const initialState = {
    items: []
}

export default function(state= initialState, action){
    const { type, payload } = action
    switch(type){
        case LOAD_PRODUCTS_SUCCESS:
            return{
                ...state,
                items: payload
            }
        case LOAD_PRODUCTS_FAIL:
            return{...state}
        default:
            return state
    }
}