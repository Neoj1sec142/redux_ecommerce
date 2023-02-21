import { combineReducers } from "redux";
import auth from './auth'
import alert from './alert'
import ecom from './ecom'

export default combineReducers({
    auth,
    alert,
    ecom
})

