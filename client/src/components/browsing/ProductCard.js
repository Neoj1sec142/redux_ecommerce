import React from 'react'

const ProductCard = ({item}) => {

    if(item){
        const {title, description, price, id} = item;
        return (
            <div className='card w-75 m-2 p-2 shadow-sm bg-light'>
                {/* <img className='' */}
                <p className='fs-3 text-center mt-2'>{title}</p>
                <p className='fs-6 ms-2'>${price}.00</p>
                <p className='fs-5 ms-2'>Description: {description}</p>
                <a href={`/product/${id}`} className="streched-link">View Details</a>
            </div>
        )
    }
}

export default ProductCard