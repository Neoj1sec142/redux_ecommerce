import UserReducer from "./reducers/UserReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
    combineReducers({
        userState: UserReducer,
    }),
    composeWithDevTools(applyMiddleware(thunk))
)

export default store