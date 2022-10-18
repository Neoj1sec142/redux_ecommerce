import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
const CartContainer = ({addedItems, total}) => {
    const [items, setItems] = useState([])
    
    useEffect(() => {
        // SESSION RESTORE
        const data = localStorage.getItem('cart')
        try{
            const cart = JSON.parse(data)
            if(cart){
                setItems(cart)
            }
        }catch(err){console.log(err)}
    },[])
    

    if(items.length){
        return(
            <div className='card cart'>
                <h3>Cart</h3>
                <button className='btn btn-outline-secondary'>Edit Cart</button>
                <button className='btn btn-outline-secondary'>Check Out</button>
                <button className='btn btn-outline-danger'>❌</button>
                <h4>Total: $</h4>
                <div className='card items'>
                    <h4>Items: </h4>
                    {items.map(item => (
                    <p>{item.title} Qty:<input type='number'/></p>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    addedItems:state.cart.addedItems,
    total: state.cart.total
})

export default connect(mapStateToProps, {})(CartContainer)