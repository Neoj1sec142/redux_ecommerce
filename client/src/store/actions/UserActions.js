import * as services from '../../services/UserServices'
import * as types from '../types'  

export const LoadUsers = () => {
    return async (dispatch) => {
        try {
            const users = await services.GetUsers()
            dispatch({
                type: types.GET_USERS,
                payload: users
            })            
        } catch (error) {
            throw error
        }
    }
}

export const LoadUserDetails = (id) => {
    return async (dispatch) => {
        try {
            console.log(id, "Before Action")
            const user = await services.GetUserDetail(id)
            dispatch({
                type: types.GET_USER_DETAIL,
                payload: user
            })
        } catch (err) {
            throw err
        }
    }
}

export const SetLoginStatus = (loginStatus) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: types.IS_LOGGED_IN,
                payload: loginStatus
            })
        } catch (err) {
            throw err
        }
    }
}

export const SetAuthStatus = (authStatus) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: types.IS_STAFF,
                payload: authStatus
            })
        } catch (err) {
            throw err
        }
    }
}

export const LoadProfileDetails = (id) => {
    return async (dispatch) => {
        try {
            console.log(id, "Before Action")
            const profile = await services.GetProfileDetail(id)
            dispatch({
                type: types.GET_PROFILE_DETAIL,
                payload: profile
            })
        } catch (err) {
            throw err
        }
    }
}