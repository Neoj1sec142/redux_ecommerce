import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux';
import { useParams } from 'react-router-dom';
import {load_product_by_id} from '../../store/actions/ecom'
import { delay } from '../../utils/utils';

const ProductDetail = ({load_product_by_id, product}) => {
    const {id} = useParams();
    const [loading, setLoading] = useState(true)
    const fetchData = async e => {
        e.preventDefault()
        load_product_by_id(id)
        await delay(750)
        setLoading(false)
    }
    useEffect(() => { if(id) fetchData() },[])

    if(!loading){
        return (
            <div className="container-fluid">
                <div className='d-flex justify-content-center mt-3'>
                    <div className='row w-75 shadow-sm border bg-light m-1'>
                        <p className='fs-1 text-center'>Title</p>
                        <p>Price: </p>
                        <p>Description: </p>
                    </div>
                </div>
                <div className='d-flex justify-content-center mt-3'>
                    <div className='row w-75 shadow-sm border bg-light m-1'>
                        
                    </div>
                </div>
            </div>
        )
    }else{ return( <div>Loading...</div> ) }
}

const mapStateToProps = state => ({
    product: state.ecom.product
})

export default connect(mapStateToProps, {load_product_by_id})(ProductDetail);