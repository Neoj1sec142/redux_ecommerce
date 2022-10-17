import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import {add_item} from '../store/actions/cart'

const ProductDetail = ({cartItems}) => {
    const {state} = useLocation()
    const [qty, setQty] = useState(0)

    const change = (e) => {
        setQty({...qty, qty: e.target.value})
    }
    const f = (id, price, qty) => {
        return {id: id, price: price, qty: qty}
    }
    const submit = () => {
        const item = f(state.id, state.price, state.qty)
        add_item(item, cartItems)
    }
    return(
        <div className="container">
            <div className="card">
                <h1 className="text-centered">title</h1>
                <span>Description: <p className="text-muted">description</p></span>
                <span>Price:<p>{state.price}</p></span>
                <input type='number' name='qty' value={qty} onChange={(e)=>change(e)}/>
                <button className='btn btn-primary' onClick={submit}>Add to Cart</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: state.cart.addedItems
})
export default connect(mapStateToProps, {add_item})(ProductDetail)