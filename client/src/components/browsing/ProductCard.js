import React from 'react'

const ProductCard = ({item}) => {

    if(item){
        return (
            <div className='col w-25 m-2 p-2 shadow-sm bg-light'>
                {/* <img className='' */}
                <p className='fs-3 text-center mt-2'>title</p>
                <p className='fs-5 ms-2'>description</p>
                <p className='fs-5 ms-2'>price</p>
            </div>
        )
    }
}

export default ProductCard