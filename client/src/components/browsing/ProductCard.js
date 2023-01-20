import React from 'react'

const ProductCard = ({item}) => {

    if(item){
        const {title, description, price, id} = item;
        return (
            <div className='card w-75 m-2 p-2 shadow-sm bg-light'>
                {/* <img className='' */}
                <p className='fs-3 text-center mt-2'>{title}</p>
                <a href={`/product/${id}`} className="streched-link">View Details</a>
                <p className='fs-5 ms-2'>{description}</p>
                <p className='fs-5 ms-2'>{price}</p>
            </div>
        )
    }
}

export default ProductCard