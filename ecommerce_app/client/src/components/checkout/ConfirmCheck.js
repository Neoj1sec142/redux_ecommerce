import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { load_cart, remove_item } from '../../store/actions/auth'
import { upload_purchase, load_purchases } from '../../store/actions/purchase'
import { delay, filterProducts } from '../../utils/utils'

const ConfirmCheck = ({
    load_cart, remove_item, upload_purchase,
    current_user, cartItems, cartTotal
}) => {
    const [loading, setLoading] = useState(true)
    const [formData, setFormData] = useState({
        customer: null,
        products: [],
        total_amount: 0
    })
    const navigate = useNavigate()
    
    const handleLoad = async () => {
        const products = filterProducts(cartItems)
        const [totalObject, ...restOfProducts] = products
        const {totalPrice} = totalObject
        const total = parseFloat(totalPrice)
        setFormData({
            customer: localStorage.getItem('user_id'),
            products: restOfProducts,
            total_amount: total
        })
        await delay(100)
        setLoading(false)
    }
    
    useEffect(() => { if(cartItems && cartItems.length >= 1) handleLoad() },[])
    const onClick = async e => {
        e.preventDefault()
        upload_purchase(formData)
        await delay(750)
        navigate('/checkout')
    }
    const deleteItem = async e => {
        e.preventDefault()
        const id = e.target.value;
        remove_item(id)
        await delay(750)
        load_cart()
        handleLoad()
    }
    
    return (
        <div className='container-fluid'>
            <div className='d-flex justify-content-center mt-3 mb-1'>
                <div className='row w-75 shadow-sm mt-3 mb-1'>
                    <p className='fs-4 text-center'>In Cart</p>
                    {cartItems && cartItems.length >= 1 ? (
                        cartItems.map((item, index) => (
                    <ul className='list-group' key={index}>
                        <li className='list-group-item'>{item.name} {item.price} 
                        <button value={item.id} onClick={e=>deleteItem(e)} className='btn btn-danger float-end'><i className='fa-solid fa-trash'></i></button></li>
                    </ul>))):null}
                    <p className='fs-4'>Total: {cartTotal ? cartTotal : 0}</p>
                    <div className='d-flex justify-content-center'>
                        <button onClick={e=>onClick(e)} className='btn btn-primary w-75'>Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

const mapStateToProps = state => ({
    current_user: state.auth.current_user,
    cartItems: state.auth.cartItems,
    cartTotal: state.auth.cartTotal
})

export default connect(mapStateToProps, {
    load_cart, remove_item, upload_purchase, load_purchases
})(ConfirmCheck)

