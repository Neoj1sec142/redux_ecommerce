/* eslint-disable import/no-anonymous-default-export */
import { 
    ADD_ITEM_SUCCESS,
    ADD_ITEM_FAIL,
    DELETE_ITEM_SUCCESS,
    DELETE_ITEM_FAIL,
    TOTAL_SUCCESS,
    TOTAL_FAIL,
    FORMAT_SUCCESS,
    FORMAT_FAIL,
    SESSION_RESTORE_SUCCESS,
    SESSION_RESTORE_FAIL,
    SESSION_SAVE_SUCCESS,
    SESSION_SAVE_FAIL
} from '../types'


const initialState = {
    addedItems: [],
    total: 0.00,
    newItem: {}
}

export default function(state= initialState, action){
    const { type, payload } = action
    switch(type){
        case SESSION_RESTORE_SUCCESS:
            return{
                ...state,
                addedItems: payload
            }
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
        case FORMAT_SUCCESS:
            return{
                ...state,
                newItem: payload
            }
        case TOTAL_SUCCESS:
            return{
                ...state,
                total: payload
            }
        case SESSION_SAVE_SUCCESS:
        case FORMAT_FAIL:
        case TOTAL_FAIL:
        case DELETE_ITEM_FAIL:
        case ADD_ITEM_FAIL:
        case SESSION_RESTORE_FAIL:
        case SESSION_SAVE_FAIL:
            return{...state}
        default:
            return {...state}
    }
}

