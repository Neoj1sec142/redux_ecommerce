/* eslint-disable import/no-anonymous-default-export */
import {
    REGISTER_SUCCESS, 
    REGISTER_FAIL, 
    LOGIN_FAIL, 
    LOGIN_SUCCESS, 
    AUTHENTICATED_FAIL,
    AUTHENTICATED_SUCCESS,
    LOGOUT_FAIL, 
    LOGOUT_SUCCESS,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL
} from '../types'

const initialState = {
    isAuthenticated: null
}

export default function(state= initialState, action){
    const { type, payload } = action
    switch(type){
        case AUTHENTICATED_SUCCESS:
        case AUTHENTICATED_FAIL:
            return{
                ...state,
                isAuthenticated: payload
            }
        case REGISTER_SUCCESS:
            return{
                ...state,
                isAuthenticated: false
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                isAuthenticated: true
            }
        case DELETE_USER_SUCCESS:
        case LOGOUT_SUCCESS:
            return{
                ...state,
                isAuthenticated: false
            }
        case LOGIN_FAIL:
        case LOGOUT_FAIL:
        case REGISTER_FAIL:
        case DELETE_USER_FAIL:
            return state
        default:
            return state
    }
}