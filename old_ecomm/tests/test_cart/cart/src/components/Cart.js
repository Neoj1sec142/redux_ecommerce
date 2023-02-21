import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { total_cart } from '../store/actions/cart'
const Cart = ({cartItems, total_cart, globalTotal}) => {
    const [items, setItems] = useState([])
    const [total, setTotal] = useState(globalTotal)
    
    useEffect(() => {
        const setData = async () => {
        let cart = cartItems.filter(i => i.id !== 0)
        await total_cart(cart)
        setItems(cart)
        setTotal(globalTotal)
        console.log(`tot: ${total} items: ${JSON.stringify(items)}`)
        }
        setData()
    }, [cartItems])
    console.log(items)
    return(
        <div className='card cart'>
            <h3>Cart</h3>
            {items.length
            ? items.map(i=> <div key={i.id}>
                    <p>ID: {i.id} Price: {i.price} QTY:{i.qty}</p>
                    <button className='btn btn-danger'>Delete</button>
                </div>)
            : <p></p>}
            <p>Total: ${total}</p>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems,
    globalTotal: state.cart.cartTotal
})
export default connect(mapStateToProps, {total_cart})(Cart)