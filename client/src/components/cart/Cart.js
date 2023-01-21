import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {load_cart, remove_item} from '../../store/actions/auth'
import {delay} from '../../utils/utils'

const Cart = ({load_cart, remove_item, cartItems, cartTotal}) => {
    const [loading, setLoading] = useState(true)
    const fetchCart = async () => {
        load_cart()
        await delay(750)
        setLoading(false)
    }
    useEffect(() => { if(loading) fetchCart() },[])
    if(!loading){
        console.log(cartItems, 'cart')
        console.log(cartTotal, "totla")
        return (
            <div className='container-fluid'>
                <div className='border w-100 p-3 text-center'>
                    <p className='fs-2 text-semibold'>Your Cart </p>
                    <p className='fs-4 text-semibold'>Total: ${cartTotal ? cartTotal : 0}.00 </p>
                </div>
                {cartItems ? (
                <div className='row border w-100 mt-2'>
                    
                </div>) : (
                <div className='row border w-100 mt-2'>
                    <p className='text-center fs-5 mt-2'>No Items In Cart</p>
                </div>
                ) }
            </div>
        )
    }else{ return( <div>Loading....</div> ) }
}

const mapStateToProps = state => ({
    cartItems: state.auth.cartItems,
    cartTotal: state.auth.cartTotal
})

export default connect(mapStateToProps, {load_cart, remove_item})(Cart);