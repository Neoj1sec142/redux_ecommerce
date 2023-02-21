import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { delay } from '../../utils/utils'
import {load_product_details} from '../../store/actions/product'

const ProductDetail = ({load_product_details, product}) => {
    const {id} = useParams()
    const [loading, setLoading] = useState(true)
    const fetchData = async () => {
        load_product_details(id)
        await delay(750)
        setLoading(false)
    }
    useEffect(() => {if(loading) fetchData()},[])
    console.log(product, "PRoduct")
    if(!loading){
        return (
            <div className='container-fluid'>
                <div className='d-flex justify-content-center'>
                    <div className='row w-75 shadow-sm'>
                        Product Title Banner
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <div className='row w-75 shadow-sm'>
                        Product Details Card
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <div className='row w-75 shadow-sm'>
                        Product Actions
                    </div>
                </div>
            </div>
        )
    }else{ return( <div>Loading...</div> ) }
}

const mapStateToProps = state => ({
    product: state.product.product
})

export default connect(mapStateToProps, {load_product_details})(ProductDetail)