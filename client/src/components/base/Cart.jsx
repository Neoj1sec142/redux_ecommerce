import React, { useState, useEffect } from 'react'
import { getCart, removeItem } from '../../services/old_utils'
const Cart = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        const data = getCart()
        setItems(data)
    },[])
    
    if(items){
        return(
            <div className='card cart-main'>
                <h5 className='text-center'>Cart</h5>
                <p className='text-muted'>Items: {items.length}</p>
                {/* {items.map((item) => (
                    <div className='card cart-item'>
                        <span><h4>{item.name}</h4> : <p>{item.price}</p></span>
                        <button onClick={removeItem(item.id)} className='btn btn-outline-danger'>Remove</button>
                    </div>))} */}
            </div>
        )
    }else{
        return(
            <div className='card cart-main'>
                <h5 className='text-center'>Cart</h5>
                <p className='text-muted'>Items: 0</p>
                
            </div>
        )
    }
}

export default Cart