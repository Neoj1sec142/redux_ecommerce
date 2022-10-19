import { combineReducers } from "redux";
import auth from './auth'
import profile from './profile'
import products from './products'
import cart from './cart'
import purchase from './purchase'
export default combineReducers({
    auth,
    profile,
    products,
    cart,
    purchase
})