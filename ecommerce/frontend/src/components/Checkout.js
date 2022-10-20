import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {load_purchase} from '../store/actions/purchase'
import {load_products} from '../store/actions/products'
import { useNavigate } from 'react-router-dom'

const Checkout = ({
    load_purchase, purchaseInit,
    products, load_products
}) => {
    const navigate = useNavigate()
    useEffect(() => {
        load_products()
    }, [])
    useEffect(() => {
        load_purchase()
    },[])

    if(products.items.length && purchaseInit.length){    
        return(
            <div className='container checkout'>
                <div className='container check-items'>
                    {purchaseInit.map(i => (
                    <div className="card item" >
                        <h2>{products.items[i.id].title}</h2>
                        <p>{products.items[i.id].description}</p>
                        <h5>QTY: {i.qty} Price: ${products.items[i.id].price}</h5>
                    </div>))}
                </div>
                <button onClick={() => navigate('/payment')} className='btn btn-outline-primary'>Proceed to Payment Info</button>
            </div>
        )
    }else{
        return(
            <div>
                <h1 className='text-centered'>You Currently Have No Items in Your Cart.</h1>
                <p><a href='/dashboard'>Click Here</a> to return to the homepage.</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    purchase: state.purchase.purchase,
    total: state.purchase.total,
    purchaseInit: state.purchase.purchaseInit,
    products: state.products
})

export default connect(mapStateToProps, {load_purchase, load_products})(Checkout)