import shop from '../../services/shop' // API Call for getData
import {
    RECEIVE_PRODUCTS,
    ADD_TO_CART,
    CHECKOUT_REQUEST,
    CHECKOUT_SUCCESS
} from '../types'

const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const addToCartUnsafe = productId => ({
  type: ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: CHECKOUT_SUCCESS,
      cart
    })
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })
}