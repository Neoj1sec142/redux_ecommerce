import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { load_cart, remove_item } from '../store/actions/auth'
import { delay } from '../utils/utils'
import {confirm_purchase} from '../store/actions/ecom'


const Checkout = ({load_cart, confirm_purchase, cartItems, cartTotal, current_user}) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)
    const [formData, setFormData] = useState({
        customer: 0,
        products: [],
        total: 0
    })
    const {customer, products, total} = formData;
    const fetchCart = async () => {
        load_cart()
        await delay(1000)
        setFormData({
            products: cartItems,
            total: cartTotal,
            customer: current_user.id
        })
        await delay(250)
        setLoading(false)
    }
    useEffect(() => { if(loading && current_user) fetchCart() },[])
    const onRemove = async e => {
        e.preventDefault()
        remove_item(e.target.name)
        await delay(500)
        fetchCart()
    }
    const onSubmit = async e => {
        e.preventDefault()
        formData.customer = current_user.id;
        confirm_purchase(formData)
        await delay(750)
        localStorage.removeItem('cartItems')
        localStorage.removeItem('cartTotal')
        navigate('/')
    }
    // console.log(current_user, "USER")
    if(!loading && current_user){
        return (
            <div className='container-fluid'>
                <div className='d-flex justify-content-center mt-3'>
                    <div className='row w-75 bg-light shadow-sm border m-1 p-3'>
                        <p className='fs-3 text-center'>Verify Your Order</p>
                        <hr className='divider' />
                    </div>
                </div>
                {(cartItems?.length >= 1) ? (
                    cartItems.map((item, index) => (
                <div className='d-flex justify-content-center mt-2' key={index}>
                    <div className='row w-75 bg-light shadow-sm border m-1 p-3'>
                        <p className='fs-2 ms-1 text-semibold'>{item.title} <button onClick={e=>onRemove(e)} name={index} className='btn btn-danger float-end'>❌</button></p>
                        <p className='fs-4 ms-2'>Price:&nbsp;${item.price}.00</p>
                        <p className='fs-5 ms-2'>Description: {item.description}</p>
                    </div>
                </div>))): <p className='fs-2'>You Have No Cart Items</p>}
                <div className='d-flex justify-content-center mt-2'>
                    <div className='row w-75 bg-light shadow-sm border m-1 p-3'>
                        <p className='fs-3 text-center p-1'>Order Total: ${cartTotal}.00</p>
                        <p className='fs-3 text-center p-1'>Items: {cartItems?.length}</p>
                    </div>
                </div>
                <form onSubmit={e=>onSubmit(e)}>
                <input hidden name="customer" value={customer} />
                <input hidden name="products" value={products} />
                <input hidden name="total" value={total} />
                <div className='d-flex justify-content-center mt-2'>
                    <div className='row w-75 bg-light shadow-sm border m-1 p-3'>
                        <button type='Submit' className='btn btn-outline-primary w-50'>Confirm Order</button>
                        <button className='btn btn-warning w-50'>Cancel Order</button>
                    </div>
                </div>
                </form>
            </div>
        )
    }else{ return( <div>Loading.....</div> ) }
}

const mapStateToProps = state => ({
    cartItems: state.auth.cartItems,
    cartTotal: state.auth.cartTotal,
    current_user: state.auth.current_user
})

export default connect(mapStateToProps, {load_cart, confirm_purchase})(Checkout);