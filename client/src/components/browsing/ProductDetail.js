import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {load_product_by_id} from '../../store/actions/ecom'
import {add_to_cart} from '../../store/actions/auth'
import { delay } from '../../utils/utils';

const ProductDetail = ({load_product_by_id, product}) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)
    const [amt, setAmt] = useState(0)
    const fetchData = async () => {
        load_product_by_id(id)
        await delay(750)
        setLoading(false)
    }
    useEffect(() => { if(id) fetchData() },[])
    const addToCart = async e => {
        e.preventDefault()
        add_to_cart(product)
        await delay(750)
        navigate('/')
    }
    if(!loading){
        const {title, price, description} = product;
        return (
            <div className="container-fluid">
                <div className='d-flex justify-content-center mt-3'>
                    <div className='row w-75 shadow-sm border bg-light m-1 p-3'>
                        <p className='fs-1 text-center'>{title}</p>
                        <p>Price: ${price}.00</p>
                        <p>Description: {description}</p>
                    </div>
                </div>
                <div className='d-flex justify-content-center mt-3'>
                    <div className='row w-75 shadow-sm border bg-light m-1'>
                        <p className='fs-3 mt-2 text-center'>Total: ${price * amt}.00</p>
                        <input className='form-control' type='number' value={amt} onChange={e=>setAmt(e.target.value)} />
                        <button className='btn btn-primary' onClick={e=>addToCart(e)}>Add to Cart</button>
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