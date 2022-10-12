import React from 'react'
import ItemCard from '../components/ItemCard'
import ProductData from '../services/ProductData'
import {addItem, getCart} from '../services/cart_test/utils'

const Main = () => {
    // 

    let data = {
        id: 2,
        qty: 3,
        price: 30
    }
    let data2 = {
        id: 4,
        qty: 2,
        price: 25
    }
    addItem(data)
    console.log(getCart())
    
    // const data = {
    //     "id": 1,
    //     "title": "test 2",
    //     "content": "texst content 2"
    // }
    // writeToFile(data)
    // console.log(readFromFile())

    if(ProductData){
        return(
            <div className='container-fluid'>
                <br></br>
                {ProductData.map((p, i) => (
                    <div key={i}>
                        <ItemCard p={p} /> 
                        <br></br>
                    </div>))}
            </div>
        )
    }
}

export default Main