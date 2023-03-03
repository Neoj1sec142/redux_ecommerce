import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { load_cart } from '../../store/actions/auth'
import { delay } from '../../utils/utils'
import {API_URL} from '../../config/index'

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
  
  if(finsihed){
    return (
        <section className='container-fluid'>
            <div className="d-flex justify-content-center mt-5">
              <div className='row w-75 align-items-center overflow-scroll p-1 mt-2'>
                {cartItems && cartItems.length >= 1 ? (
                  cartItems.map((item, index) => (
                <div className='col' key={index}>
                  <img src={item.image} alt="Not Present"  />
                  <div className="description">
                    <h3>{item.name}</h3>
                    <h5>${item.price}</h5>
                    <p className='fs-7 text-muted'>{item.category}</p>
                  </div>
                </div>)))
                : <div>
                    <div className='d-flex justify-content-center'>
                      <div className='row w-75 shadow-sm p-3'>
                        <h1 className='text-center mt-2'>No Items in Cart</h1>
                        <p className='fs-4'><a href='/' className='nolink'>CLICK HERE</a> to return home.</p>
                      </div>
                    </div>
                  </div>}
              </div>
            </div>
            <p className='fs-3 text-center text-decoration-undeerline'>Total Price: ${cartTotal}</p>
            {cartItems && cartItems.length >= 1 ? (
            <form className='d-flex justify-content-center' action={`${API_URL}/api/stripe/create-checkout-session/`} method="POST">
              <input type="hidden" name="cart" value={JSON.stringify(cartD)} />
              <button className='btn btn-sm btn-primary' type="submit">Checkout</button>
            </form>):null}
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