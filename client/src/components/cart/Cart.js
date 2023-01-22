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
    // useEffect(() => ,[cartItems])
    useEffect(() => { if(loading) fetchCart() },[])
    const onClick = async e => {
        e.preventDefault()
        remove_item(e.target.name)
        await delay(750)
        fetchCart()
    }
    if(!loading){
        console.log(cartItems, 'cart')
        console.log(cartTotal, "total")
        return (
            <div className='container-fluid'>
                <div className='border w-100 p-3 text-center'>
                    <button onClick={()=>setOpen(!open)}>❌</button>
                    <p className='fs-2 text-semibold'>Your Cart </p>
                    <p className='fs-4 text-semibold'>Total: ${cartTotal ? cartTotal : 0}.00 </p>
                </div>
                {(cartItems?.length >= 1) ? (
                    cartItems.map((item, index) => (
                <div className='row border w-100 mt-2' key={index}>
                    {/* Map Cart Items */}
                    <p>{item.title}&nbsp; | &nbsp;{item.price} <button onClick={e=>onClick(e)} name={index} className='btn btn-danger'>❌</button></p>
                </div>))) : (
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

export default connect(mapStateToProps, {load_cart, remove_item, total_cart})(Cart);