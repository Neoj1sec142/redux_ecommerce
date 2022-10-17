import React from 'react'

const CartContainer = () => {
    
    return(
        <div className='card cart'>
            <div className='card items'>
                <h4>title</h4>
                <p>qty</p>
                <h5>price</h5>
                <button className='btn btn-outline-danger'>❌</button>
            </div>
            <h3>Total: $</h3>
        </div>
    )
}
export default CartContainer