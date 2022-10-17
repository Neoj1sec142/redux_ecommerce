import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { load_products } from '../store/actions/products'

const Dashboard = ({products, load_products}) => {
    useEffect(() => {
        load_products()
    }, [])
    const navigate = useNavigate()
    const navToItem = (item) => {
        console.log(item)
        // navigate(`/product/${item.id}`, { state: {title:item.title, 
        //     price:item.price, description:item.description} })
    }
    return(
        <div className='container'>
            <h2 style={{marginLeft: '22%'}}>Dashboard</h2>
            <div className='card items'>
                {products.items.map(item => (
                    <div className="card item" key={item.id} onClick={(item) => navToItem(item)}>
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