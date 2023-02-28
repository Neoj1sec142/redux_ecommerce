import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { load_cart } from '../../store/actions/auth'
import { delay } from '../../utils/utils'
import {API_URL} from '../../config/index'

const Checkout = ({load_cart, cartItems, cartTotal}) => {
  const [loading, setLoading] = useState(true)
  const fetchCart = async () => {
    load_cart()
    await delay(500)
    setLoading(false)
  }
  useEffect(() => {
    if(loading) fetchCart()
  },[])
  if(!loading){
    const dictionaryData = {
      cartItems: cartItems,
      cartTotal: cartTotal,
    };
    console.log(dictionaryData, "DICT")
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
            <form action={`${API_URL}/api/stripe/create-checkout-session/`} method="POST">
              <input type="hidden" name="dictionary_data" value={JSON.stringify(dictionaryData)} />
              <button type="submit">Checkout</button>
            </form>
        </section>
    )
  }else{ return( <div>Loading....</div> ) }
}

const mapStateToProps = state => ({
  cartItems: state.auth.cartItems,
  cartTotal: state.auth.cartTotal
})

export default connect(mapStateToProps, {load_cart})(Checkout)