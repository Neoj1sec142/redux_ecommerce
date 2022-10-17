import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { load_products } from '../store/actions/products'

const Dashboard = ({products, load_products}) => {
    useEffect(() => {
        load_products()
    }, [])

    return(
        <div className='container'>
            <h2>Dashboard</h2>
            <div className='card items'>
                {products.items.map(item => (
                    <div className="card item">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <h5>{item.price}</h5>
                    </div>))}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.products
})
export default connect(mapStateToProps, {load_products})(Dashboard)