/* eslint-disable import/no-anonymous-default-export */
import {
    SIGNUP_SUCCESS, SIGNUP_FAIL, LOGIN_SUCCESS, 
    LOGOUT_SUCCESS, LOGOUT_FAIL, LOGIN_FAIL,
    LOAD_CURRENT_SUCCESS, LOAD_CURRENT_FAIL,
    LOAD_AUSER_SUCCESS, LOAD_AUSER_FAIL,
    LOAD_USERS_SUCCESS, LOAD_USERS_FAIL,
    UPDATE_USER_SUCCESS, UPDATE_USER_FAIL,
    REMOVE_USER_SUCCESS, REMOVE_USER_FAIL,
    LOAD_USERPROFILE_SUCCESS, LOAD_USERPROFILE_FAIL,
    ADD_TO_CART_SUCCESS, ADD_TO_CART_FAIL,
    LOAD_CART_SUCCESS, LOAD_CART_FAIL,
    REMOVE_ITEM_SUCCESS, REMOVE_ITEM_FAIL,
    TOTAL_CART_SUCCESS, TOTAL_CART_FAIL
} from '../types'

const initialState = {
    current_user: {},
    access_token: localStorage.getItem('access_token'),
    refresh_token: localStorage.getItem("refresh_token"),
    isAuthenticated: false,
    loading: false,
    users: [],
    userProfile: {},
    cartItems: localStorage.getItem("cartItems"),
    cartTotal: localStorage.getItem("cartTotal")
}

export default function(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case LOAD_CART_SUCCESS:
            localStorage.setItem('cartTotal', JSON.stringify(payload.total))
            localStorage.setItem('cartItems', JSON.stringify(payload.items))
            return{
                ...state,
                cartItems: payload.items,
                cartTotal: payload.total
            }
        case TOTAL_CART_SUCCESS:
            localStorage.setItem('cartTotal', JSON.stringify(payload))
            return{
                ...state,
                cartTotal: payload
            }
        case REMOVE_ITEM_SUCCESS:
        case ADD_TO_CART_SUCCESS:
            localStorage.setItem('cartItems', JSON.stringify(payload))
            return{
                ...state,
                cartItems: payload
            }
        case UPDATE_USER_SUCCESS:
        case LOAD_CURRENT_SUCCESS:
            localStorage.setItem('user_id', payload.id)
            localStorage.setItem('username', payload.username)
            localStorage.setItem('is_staff', payload.is_staff)
            return{
                ...state,
                isAuthenticated: payload.is_active,
                current_user: payload,
            }
        case LOAD_USERS_SUCCESS:
            return{
                ...state,
                users: payload
            }
        case LOAD_USERPROFILE_SUCCESS:
        case LOAD_AUSER_SUCCESS:
            return{
                ...state,
                userProfile: payload
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('access_token', payload.access)
            localStorage.setItem('refresh_token', payload.refresh)
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                access_token: payload.access,
                refresh_token: payload.refresh
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                loading: true
            }
        case LOAD_CURRENT_FAIL:
        case SIGNUP_FAIL:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
            return{
                ...state,
                token: null,
                loading: false
            }
        case ADD_TO_CART_FAIL:
        case LOAD_CART_FAIL:
        case REMOVE_ITEM_FAIL:
        case TOTAL_CART_FAIL:
        case LOAD_USERPROFILE_FAIL:
        case UPDATE_USER_FAIL:
        case REMOVE_USER_SUCCESS:
        case REMOVE_USER_FAIL:
        case LOAD_USERS_FAIL:
        case LOGOUT_FAIL:
        case LOAD_AUSER_FAIL:
            return{...state}
        default:
            return state
    }
}