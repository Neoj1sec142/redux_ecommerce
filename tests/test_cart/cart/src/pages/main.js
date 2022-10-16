import React, {useState, useEffect} from "react"
import { connect } from "react-redux"
import {get_data, add_item} from '../store/actions/cart'

const Main = ({
    get_data, products, add_item,
    cartItems_global
}) => {
    const [item, setItem] = useState({
        id: 0,
        price: 0,
        qty: 0
    })
    const {id, price, qty} = item
    useEffect(() => {
        get_data()
    },[])
    const change = (p, e) => {
        setItem({id:p.id, price:p.price, qty:e.target.value})
    }
    const submit = (e) => {
        // e.preventDefault()
        add_item(item, cartItems_global)
    }
    return(
        <div className="container">
            <br/>
            {products.map(p => (
                <div className="card" key={p.id}>
                    <br/>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <h3>{p.price}</h3>
                    <label className="form-label" htmlFor="qty"></label>
                    <input 
                        onChange={e => change(p,e)} 
                        className="form-control" 
                        value={qty}
                        name="qty" 
                        type='number'/>
                    <button 
                        className="btn btn-primary"
                        onClick={e => submit(e)}
                    >Add To Cart</button>
                </div>
            ))}
            <br/>
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.cart.products,
    cartItems_global: state.cart.cartItems
})

export default connect(mapStateToProps, {get_data, add_item})(Main)