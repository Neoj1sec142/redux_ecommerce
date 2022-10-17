import { combineReducers } from "redux";
import auth from './auth'
import profile from './profile'
import products from './products'
export default combineReducers({
    auth,
    profile,
    products
})