import React from 'react'
import ItemCard from '../components/ItemCard'
import ProductData from '../services/ProductData'
const Main = () => {
    console.log(ProductData)
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