import React from 'react'
import ItemCard from '../components/ItemCard'
import ProductData from '../services/ProductData'
import {readFromFile, writeToFile} from '../services/cart_test/utils'

const Main = () => {
    // 
    const data = {
        "id": 1,
        "title": "test 2",
        "content": "texst content 2"
    }
    writeToFile(data)
    console.log(readFromFile())

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