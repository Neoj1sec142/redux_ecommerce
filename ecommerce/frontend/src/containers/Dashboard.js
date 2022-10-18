import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { load_products } from '../store/actions/products'
import { add_item, format_item } from '../store/actions/cart'

const Dashboard = ({products, load_products, add_item, addedItems}) => {
    const [formatted, setFormatted] = useState(false)
    const [qty, setQty] = useState(0)
    useEffect(() => {
        const load = async () => {
            await load_products()
        }
        load()
    }, [])


    const addItem = async (e) => {
        e.preventDefault()
        await add_item(format_item(e, qty), addedItems)
        .then(setFormatted(!formatted))
        .catch(err=>console.log(err, 'error'))
    }

    const handle = (e) => {setQty(e.target.value)}

    return(
        <div className='container'>
            <h2 style={{marginLeft: '22%'}}>Dashboard</h2>
            <div className='card items'>
                {products.items.map(item => (
                    <div className="card item" key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <h5>{item.price}</h5>
                        <input type='number' value={qty} name='qty' onChange={e=>handle(e)}/>
                        <button 
                            value={item.price} 
                            name={item.id}
                            onClick={(e) => addItem(e)} 
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