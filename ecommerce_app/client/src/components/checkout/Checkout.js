import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { load_cart } from '../../store/actions/auth'
import { delay } from '../../utils/utils'
import {API_URL} from '../../config/index'
import axios from 'axios'
const Checkout = ({load_cart, cartItems, cartTotal, current_user}) => {
  const [loading, setLoading] = useState(true)
  const [finsihed, setFinsihed] = useState(false)
  const [cartD, setCart] = useState({
    cartItems: cartItems,
    username: current_user.username || 'User'
  })
  const fetchCart = async () => {
    load_cart()
    await delay(500)
    setLoading(false)
  }
  useEffect(() => {
    if(loading) fetchCart()
  },[])
  useEffect(() => {
    const handleCart = () => {
      setCart({
        cartItems: cartItems,
        username: current_user.username || 'User'
      })
      setFinsihed(true)
    }
    if(!loading && !finsihed) handleCart()
  },[loading])
  const checkout = async e => {
    e.preventDefault()
    try {
      const cart = JSON.stringify(cartD)
      const response = await axios.post(`${API_URL}/api/stripe/create-checkout-session/`, {cart});
      console.log(response, "RES")
      window.location.href = response.data.redirect_url;
    } catch (err) {
      console.error(err, "Err");
    }
  }
  if(finsihed){
    
    return (
        <section>
            <div className="product">
              <img
                  src="https://i.imgur.com/EHyR2nP.png"
                  alt="The cover of Stubborn Attachments"
              />
              <div className="description">
                <h3>Stubborn Attachments</h3>
                <h5>$20.00</h5>
              </div>
            </div>
            <form onSubmit={e=>checkout(e)}>
              <input type="hidden" name="cart" value={JSON.stringify(cartD)} />
              <button type="submit">Checkout</button>
            </form>
        </section>
    )
  }else{ return( <div>Loading....</div> ) }
}

const mapStateToProps = state => ({
  cartItems: state.auth.cartItems,
  cartTotal: state.auth.cartTotal,
  current_user: state.auth.current_user
})

export default connect(mapStateToProps, {load_cart})(Checkout)