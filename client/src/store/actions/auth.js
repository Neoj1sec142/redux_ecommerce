import axios from 'axios'
import Client from '../services/api'
import { setAlert } from './alert'
import {
    SIGNUP_SUCCESS, SIGNUP_FAIL, LOGIN_SUCCESS, 
    LOGIN_FAIL, LOGOUT_SUCCESS, 
    LOGOUT_FAIL, LOAD_CURRENT_SUCCESS,
    LOAD_CURRENT_FAIL, LOAD_USERS_SUCCESS,
    LOAD_AUSER_SUCCESS, LOAD_AUSER_FAIL,
    LOAD_USERPROFILE_SUCCESS, LOAD_USERPROFILE_FAIL,
    LOAD_USERS_FAIL, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL,
    REMOVE_USER_SUCCESS, REMOVE_USER_FAIL,
    ADD_TO_CART_SUCCESS, ADD_TO_CART_FAIL,
    LOAD_CART_SUCCESS, LOAD_CART_FAIL,
    REMOVE_ITEM_SUCCESS, REMOVE_ITEM_FAIL,
    TOTAL_CART_SUCCESS, TOTAL_CART_FAIL
} from '../types'
import { GetUsers, UpdateUser, RemoveUser, GetUserDetail, GetAllUserDetail } from '../services/UserServices'


export const login = ({username, password}) => async dispatch => {
    try{
        const res = await Client.post('token/obtain/', {
            username: username,
            password: password
        })
        console.log(res, "LOGIN RES")
        if(res.status === 200){
            Client.defaults.headers['Authorization'] = `JWT ${res.data.access}`
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
            dispatch(load_current(username))
            dispatch(setAlert('Authenticated successfully', 'success'))
        }else{
            dispatch({
                type: LOGIN_FAIL
            })
            dispatch(setAlert('Error Autheticating', 'error'))
        }
    }catch(err){
        dispatch({
            type: LOGIN_FAIL
        })
        dispatch(setAlert('Error Autheticating', 'error'))
    }
    
}
export const load_current = (username) => async dispatch => {
    if(username !== null && username !== undefined && username !== ''){
        try{
            const res = await Client.get(`users/${username}/`)
            if(res.status === 200){
                dispatch({
                    type: LOAD_CURRENT_SUCCESS,
                    payload: res.data
                })
            }else{
                dispatch({
                    LOAD_CURRENT_FAIL
                })
            }
        }catch(err){
            dispatch({
                type: LOAD_CURRENT_FAIL
            })
        }
    }else{
        const user_id = localStorage.getItem('user_id')
        try{
            const res = await Client.get(`users/${user_id}/`)
            console.log('res with id', res)
            if(res.status === 200){
                dispatch({
                    type: LOAD_CURRENT_SUCCESS,
                    payload: res.data
                })
            }else{
                dispatch({
                    type: LOAD_CURRENT_FAIL
                })
            }
        }catch(err){
            dispatch({
                type: LOAD_CURRENT_FAIL
            })
        }
    }
}


export const signup = ({first_name, last_name, email, username, password}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({
        first_name, 
        last_name, 
        email,
        username,
        password})
    try{
        const res = await axios.post('http://localhost:8000/users/create/', body, config)
        if(res.status === 201 || res.statusText === 'Created'){
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        })
        dispatch(setAlert('Account Created Successfully', 'success'))
        }else{
            dispatch({
                type: SIGNUP_FAIL,
            })
            dispatch(setAlert('Error creating account', 'error'))    
        }
    }catch(err){
        dispatch({
            type: SIGNUP_FAIL,
        })
        dispatch(setAlert(err, 'error'))
    }
}

export const logout = () => async dispatch => {
    try{
        const res = await Client.post('blacklist/', {
            refresh_token: localStorage.getItem('refresh_token'),
            access_token: localStorage.getItem('access_token')
        })
        console.log(res, "LOGOUT RES")
        if(res.statusText.includes('Reset')){
            localStorage.removeItem('refresh_token')
            localStorage.removeItem('access_token')
            localStorage.removeItem('token')
            localStorage.removeItem('username')
            localStorage.removeItem('user_id')
            localStorage.removeItem('is_staff')
            localStorage.clear()
            dispatch(setAlert('Logout Successful', 'success'))
            dispatch({
                type: LOGOUT_SUCCESS
            })
        }else{
            localStorage.clear()
            dispatch({
                type: LOGOUT_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: LOGOUT_FAIL
        })
    }
}

export const load_all_users = () => async dispatch => {
    try{
        const res = await GetUsers()
        if(res.status === 200){
            dispatch({
                type: LOAD_USERS_SUCCESS,
                payload: res.data
            })
        }else{
            dispatch({
                type: LOAD_USERS_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: LOAD_USERS_FAIL
        })
    }
}

export const load_auser = (id) => async dispatch => {
    try{
        const res = await GetUserDetail(id)
        if(res.status === 200){
            dispatch({
                type: LOAD_AUSER_SUCCESS,
                payload: res.data
            })
        }else{
            dispatch({
                type: LOAD_AUSER_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: LOAD_AUSER_FAIL
        })
    }
}

export const load_auser_det = (id) => async dispatch => {
    try{
        const res = await GetAllUserDetail(id)
        if(res.status === 200){
            dispatch({
                type: LOAD_USERPROFILE_SUCCESS,
                payload: res.data
            })
        }else{
            dispatch({
                type: LOAD_USERPROFILE_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: LOAD_USERPROFILE_FAIL
        })
    }
}

export const update_user = (id, user) => async dispatch => {
    try{
        const res = await UpdateUser(id, user)
        if(res.status === 200 || res.status === 201){
            dispatch({
                type: UPDATE_USER_SUCCESS,
                payload: res.data
            })
        }else{
            console.log(res, "Error 1")
            dispatch({
                type: UPDATE_USER_FAIL
            })
        }
    }catch(err){
        console.log(err, "Error 2")
        dispatch({
            type: UPDATE_USER_FAIL
        })
    }
}
export const destroy_user = (id) => async dispatch => {
    try{
        const res = await RemoveUser(id)
        if(res.status === 200 || res.statusText === 'No Content'){
            dispatch({
                type: REMOVE_USER_SUCCESS
            })
        }else{
            console.log(res, "Error 1")
            dispatch({
                type: REMOVE_USER_FAIL
            })
        }
    }catch(err){
        console.log(err, "Error 2")
        dispatch({
            type: REMOVE_USER_FAIL
        })
    }
}

export const add_to_cart = (item) => async dispatch => {
    try{
        const data = JSON.parse(localStorage.getItem('cartItems'))
        if(data.length){
            const cart = data.push(item)
            dispatch({
                type: ADD_TO_CART_SUCCESS,
                payload: cart
            })
        }else{
            console.log(data, "ERR 1")
            dispatch({
                type: ADD_TO_CART_FAIL
            })
        }
    }catch(err){
        console.log(err, "ERR 2")
        dispatch({
            type: ADD_TO_CART_FAIL
        })
    }
}

export const load_cart = () => async dispatch => {
    try{
        const items = JSON.parse(localStorage.getItem('cartItems'))
        const total = JSON.parse(localStorage.getItem('cartTotal'))
        if(items){
            const data = {
                items: items,
                total: total
            }
            dispatch({
                type: LOAD_CART_SUCCESS,
                payload: data
            })
        }else{
            console.log(items, "ERR 1 items")
            console.log(total, "ERR 1 total")
            dispatch({
                type: LOAD_CART_FAIL
            })
        }
    }catch(err){
        console.log(err, "ERR 2")
        dispatch({
            type: LOAD_CART_FAIL
        })
    }
}

export const remove_item = (id) => async dispatch => {
    try{
        const cart = JSON.parse(localStorage.getItem('cartItems'))
        for(let i=0; i<cart.length; i++){
            if(cart[i].id === id){
                cart.pop(i)
            }
        }
        dispatch({
            type: REMOVE_ITEM_SUCCESS,
            payload: cart
        })
    }catch(err){
        console.log(err, "ERR")
        dispatch({
            type: REMOVE_ITEM_FAIL
        })
    }
}

export const total_cart = () => async dispatch => {
    try{
        const cart = JSON.parse(localStorage.getItem('cartItems'))
        let total = 0;
        for(let i=0; i<cart.length; i++){
            total += cart[i].price
        }
        dispatch({
            type: TOTAL_CART_SUCCESS,
            payload: total
        })
    }catch(err){
        console.log(err, 'ERR')
        dispatch({
            type: TOTAL_CART_FAIL
        })
    }
}