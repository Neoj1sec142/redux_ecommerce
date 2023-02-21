import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {load_cart, remove_item, total_cart} from '../../store/actions/auth'
import {delay} from '../../utils/utils'

const Cart = ({load_cart, remove_item, total_cart, cartItems, cartTotal, setOpen, open}) => {
    const [loading, setLoading] = useState(true)
    const fetchCart = async () => {
        load_cart()
        await delay(500)
        total_cart()
        await delay(500)
        setLoading(false)
    }
    useEffect(() => { if(loading) fetchCart() },[])
    const onClick = async e => {
        e.preventDefault()
        remove_item(e.target.name)
        await delay(750)
        fetchCart()
    }
    if(!loading){
        return (
            <div className='container-fluid'>
                <div className='border w-100 p-3 text-center'>
                    <button onClick={()=>setOpen(!open)}>❌</button>
                    <p className='fs-2 text-semibold'>Your Cart </p>
                    <p className='fs-4 text-semibold'>Total: ${cartTotal ? cartTotal : 0}.00 </p>
                </div>
                {(cartItems?.length >= 1) ? (
                    cartItems.map((item, index) => (
                
                <div className='d-flex jusitfy-content-center' key={index}>                        
                    <div className='row border w-100 mt-2 p-1'>
                        {/* Map Cart Items */}
                        <p>{item.title}&nbsp; | &nbsp;{item.price} <button onClick={e=>onClick(e)} name={index} className='btn btn-danger'>❌</button></p>
                    </div>
                </div>))
                ) : (
                <div className='d-flex jusitfy-content-center'>    
                    <div className='row border w-100 mt-2'>
                        <p className='text-center fs-5 mt-2'>No Items In Cart</p>
                    </div>
                </div>
                ) }
                {(cartItems?.length >= 1) ? (
                <div className='d-flex justify-content-center mt-1'>
                    <div className='row border m-2 shadow-sm'>
                        <a href='/checkout' className='btn btn-warning'><i className='fas fa-shopping-cart'></i>&nbsp;Checkout</a>
                    </div>
                </div>): null}
            </div>
        )
    }else{ return( <div>Loading....</div> ) }
}

const mapStateToProps = state => ({
    cartItems: state.auth.cartItems,
    cartTotal: state.auth.cartTotal
})

export default connect(mapStateToProps, {load_cart, remove_item, total_cart})(Cart);