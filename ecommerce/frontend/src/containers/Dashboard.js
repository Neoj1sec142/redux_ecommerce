import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { load_products } from '../store/actions/products'
import { add_item } from '../store/actions/cart'

const Dashboard = ({products, load_products, add_item, addedItems}) => {
    const [cart, setCart] = useState([])
    
    useEffect(() => {
        load_products()
        setCart(addedItems)
    }, [])
   
   
    return(
        <div className='container'>
            <h2 style={{marginLeft: '22%'}}>Dashboard</h2>
            <div className='card items'>
                {products.items.map(item => (
                    <div className="card item" key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <h5>{item.price}</h5>
                        <button 
                            value={item.price} 
                            name={item.id}
                            onClick={(e) => add_item(e)} 
                            className='btn btn-outline-primary'
                        >Add to Cart</button>
                    </div>))}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.products,
    addedItems: state.cart.addedItems
})
export default connect(mapStateToProps, {load_products, add_item})(Dashboard)