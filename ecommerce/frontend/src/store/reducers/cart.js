/* eslint-disable import/no-anonymous-default-export */
import { 
    ADD_ITEM_SUCCESS,
    ADD_ITEM_FAIL,
    DELETE_ITEM_SUCCESS,
    DELETE_ITEM_FAIL,
    TOTAL_SUCCESS,
    TOTAL_FAIL
} from '../types'

const initialState = {
    addedItems: [],
    total: 0.00
}

export default function(state= initialState, action){
    const { type, payload } = action
    switch(type){
        case ADD_ITEM_SUCCESS:
            return{
                ...state,
                addedItems: payload
            }
        case DELETE_ITEM_SUCCESS:
            return{
                ...state,
                addedItems: payload
            }
        case TOTAL_SUCCESS:
            return{
                ...state,
                total: payload
            }
        case TOTAL_FAIL:
        case DELETE_ITEM_FAIL:
        case ADD_ITEM_FAIL:
            return{...state}
        default:
            return {...state}
    }
}

