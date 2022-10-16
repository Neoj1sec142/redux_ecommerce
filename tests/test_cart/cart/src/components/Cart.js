import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { total_cart } from '../store/actions/cart'
const Cart = ({cartItems, total_cart}) => {
    const [cart, setCart] = useState({
        items: [],
        total: 0.00
    })
    
    useEffect(() => {
        const setData = async () => {
            setCart({...cart, items: cartItems.filter(i => i.id!==0)})
            await total_cart(cart.items)
        }
        setData()
    }, [cartItems])
    console.log(cart.total)
    return(
        <div className='card cart'>
            <h3>Cart</h3>
            {cart.items.length
            ? cart.items.map(i=> <div key={i.id}>
                    <p>ID: {i.id} Price: {i.price} QTY:{i.qty}</p>
                    <button className='btn btn-danger'>Delete</button>
                </div>)
            : <p></p>}
            <p>Total: ${parseInt(cart.total)}</p>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
})
export default connect(mapStateToProps, {total_cart})(Cart)