import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {  total_cart } from '../store/actions/cart'

const CartContainer = ({addedItems, total, total_cart }) => {
    const [items, setItems] = useState([])
    useEffect(() => {
        setItems(addedItems)
    }, [])
    
    
    if(addedItems.length){
        return(
            <div className='card cart'>
                <h3>Cart</h3>
                <button className='btn btn-outline-secondary'>Edit Cart</button>
                <button className='btn btn-outline-secondary'>Check Out</button>
                <button className='btn btn-outline-danger'>❌</button>
                <h4>Total: ${total}</h4>
                <div className='card items'>
                    <h4>Items: </h4>
                    {addedItems.map(item => (
                    <p>ID: {item.id} Qty:<input value={item.qty} type='number'/></p>
                    ))}
                </div>
            </div>
        )
    }else{
        return(
            <div className='card cart'>
                <p className='text-muted'>No Items In Cart</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    addedItems:state.cart.addedItems,
    total: state.cart.total
})

export default connect(mapStateToProps, { total_cart})(CartContainer)