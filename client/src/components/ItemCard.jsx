import React from 'react'

const ItemCard = ({p}) => {

    return(
        <div className='card item-thmb'>
            <img id='item-img-thmb' src={p.img_url} alt='img-unavailable' />
            <legend className='card-legend'>{p.title}</legend>
            <h4>{p.price}</h4>
            <a href='#'>Show Description</a>
        </div>
    )
}

export default ItemCard