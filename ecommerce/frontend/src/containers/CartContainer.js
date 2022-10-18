import React, { useEffect, useState } from 'react'

const CartContainer = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        const data = localStorage.getItem('cart')
        try{
            const cart = JSON.parse(data)
            if(cart){
                setItems(cart)
            }
        }catch(err){console.log(err)}
    },[])
    
    return(
        <div className='card cart'>
            <h3>Cart</h3>
            <button className='btn btn-outline-secondary'>Edit Cart</button>
            <button className='btn btn-outline-secondary'>Check Out</button>
            <button className='btn btn-outline-danger'>❌</button>
            <h4>Total: $</h4>
            <div className='card items'>
                <h4>Items: </h4>
                <p>item input(number)increment qty </p>
            </div>
        </div>
    )

}
export default CartContainer