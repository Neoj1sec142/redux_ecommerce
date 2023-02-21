import React from 'react';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom'
// import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './store/store'
import { getAllProducts } from './store/actions/index'


const middleware = [ thunk ];
// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(createLogger());
// }

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)
store.dispatch(getAllProducts())
render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>, 
document.getElementById('root'));
