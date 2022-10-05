const {  IS_LOGGED_IN, IS_STAFF, GET_USERS, UPDATE_USER, GET_USER_DETAIL, GET_PROFILE_DETAIL } = require('../types')

const initialState = {
    users: [],
    user: {},
    profile: {},
    is_logged_in: false,
    is_staff: false,
    loading: true
}

const UserReducer = (state =initialState, action) => {
    switch (action.type) {
        case IS_LOGGED_IN:
            return {...state, is_logged_in: action.payload, loading:true}
        case IS_STAFF:
            return {...state, is_staff: action.payload, loading:true}
        case GET_USERS:
            return {...state, users: action.payload, loading:false}
        case UPDATE_USER:
            return {...state, update: action.payload, loading:false}
        case GET_USER_DETAIL:
            return {...state, user: action.payload, loading:false}
        case GET_PROFILE_DETAIL:
            return {...state, profile: action.payload, loading:false}
        default:
            return {...state}
    }
}

export default UserReducer