import { combineReducers } from "redux";
import auth from './auth'
import alert from './alert'
import product from './product'
import review from './review'
import paymentMethod from './paymentMethod'

export default combineReducers({
    auth,
    alert,
    product,
    review, 
    paymentMethod
})

