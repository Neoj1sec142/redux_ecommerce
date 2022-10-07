import React from 'react'
import { addToCart } from '../services/utils'

const ItemCard = ({p}) => {

    return(
        <div className='card item-thmb'>
            <img id='item-img-thmb' src={p.img_url} alt='img-unavailable' />
            <legend className='card-legend'>{p.title}</legend>
            <h4>{p.price}</h4>
            <a href='#'>Show Description</a>
            <button onClick={addToCart(p)} className='btn btn-outline-warning'>Add to Cart</button>
        </div>
    )
}

export default ItemCard