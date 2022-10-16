import React from 'react'
import { connect } from 'react-redux'
const Cart = ({cartItems}) => {
    return(
        <div className='card cart'>
            <h3>Cart</h3>
            {cartItems.length
            ? cartItems.map(i=> <div>
                    <p>ID: {i.id} Price: {i.price} QTY:{i.qty}</p>
                    <button className='btn btn-danger'>Delete</button>
                </div>)
            : <p></p>}
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
})
export default connect(mapStateToProps, {})(Cart)