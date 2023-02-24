import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {load_cart, add_to_cart, remove_item} from '../../store/actions/auth'
import { delay } from '../../utils/utils'

const ViewCart = ({
    load_cart, add_to_cart, remove_item, 
    cartTotal, cartItems
}) => {
    const [loading, setLoading] = useState(true)

    const fetchCart = async () => {
        load_cart()
        await delay(750)
        setLoading(false)
    }
    const addAgain = async (item, amt) => {
        add_to_cart(item, amt)
        setLoading(true)
        await delay(100)
        fetchCart()
    }
    const removeCartItem = async (id) => {
        remove_item(id)
        setLoading(true)
        await delay(100)
        fetchCart()
    }
    const cancelOrder = async e => {
        e.preventDefault()
        if(window.confirm("We hate to see you go. Are you sure you want to cancel your whole order? This action cannot be undone.")){
            localStorage.removeItem('cartTotal')
            localStorage.removeItem('cartItems')
            await delay(150)
            fetchCart()
        }
    }
    useEffect(() => {if(loading) fetchCart()} ,[])
    if(!loading){
        return (
            <div className='container-fluid'>
                <div className='d-flex justify-content-center mt-5 mb-5'>
                    <ul className='list-group mt-3 mb-1 w-75 border shadow-sm'>
                        {cartItems && cartItems.length >= 1 ? (
                            cartItems.map((item, index) => (
                        <li className='list-group-item mt-1' key={index}>
                            <p>{item.name} &nbsp; | &nbsp; Price: ${item.price}</p>
                            <div className='d-flex justify-content-evenly p-1'>
                                <button type="button"
                                    className='btn btn-sm btn-success w-50'
                                    onClick={()=>addAgain(item)}>Add</button>
                                <button value={item.id} type="button"
                                    className='btn btn-sm btn-danger w-50'
                                    onClick={e=>{removeCartItem(e)}}>rem</button>
                                    
                            </div>
                        </li>))): <li className='list-group-item mt-1 mb-2'>No Items Currently In Cart</li>}
                    </ul>
                </div>
                <div className='d-flex justify-content-center mt-1 mb-3'>
                    <div className='row shadow-sm w-75 p-2'>
                        <p className='fs-4'>Total: ${cartTotal}</p>
                        <div className='d-flex justify-content-evenly mt-1 mb-2'>
                            <a href='/checkout' className='btn btn-sm btn-success w-25'>Checkout</a>
                            <button onClick={e=>cancelOrder(e)} className='btn btn-sm btn-danger w-25'>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else{ return( <div>Loading....</div> ) }
}

const mapStateToProps = state => ({
    cartTotal: state.auth.cartTotal,
    cartItems: state.auth.cartItems
})

export default connect(mapStateToProps, {
    load_cart, add_to_cart, remove_item
})(ViewCart);