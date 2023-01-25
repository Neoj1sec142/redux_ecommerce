import React, { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { delay } from '../../utils/utils'
import {load_purchase_by_id} from '../../store/actions/ecom'
import { useParams } from 'react-router-dom'

const PurchaseDetail = ({load_purchase_by_id, purchase, current_user}) => {
    const [loading, setLoading] = useState(true)
    const {id} = useParams();
    const fetchPurchase = async () => {
        load_purchase_by_id(id)
        await delay(750)
        setLoading(false)
    }
    useEffect(() => {if(id && loading) fetchPurchase()},[])

    if(!loading && purchase){
        const {total, products, date_created} = purchase;
        console.log(purchase, "PUrcase")
        return (
            <div className='container-fluid'>
                {current_user.id === parseInt(purchase.customer) ? (
                    <Fragment>
                <div className='d-flex justify-content-center-content mt-3'>
                    <div className='row w-75 bg-light border shadow-sm m-1'>
                        <p className="fs-2 text-center">Purchase</p>
                    </div>
                </div>
                <div className='d-flex justify-content-center mt-2'>
                    <div className='row w-75 shadow-sm border bg-light m-1'>
                        <p className='fs-2 ms-2'>Total: {total}</p>
                        {/* <p className='fs-4 ms-2'>Products: {products.length}</p> */}
                        <p className='fs-3 ms-2'>Date of Purchase: {date_created ? date_created.slice(1,10) : ''}</p>
                    </div>
                    
                </div>
                </Fragment>) : (
                    <div className='d-flex justify-content-center-content mt-3'>
                        <div className='d-flex justify-content-center-content mt-3'>
                            <p className="fs-2 text-center">Sorry You Seem to Have Made It to the Wrong Page</p>
                            <p><a href='/'>Click Here</a> to find your way home...</p>
                        </div>
                    </div>
                )}
            </div>
        )
    }else{ return( <div>Loading...</div> ) }
}

const mapStateToProps = state => ({
    current_user: state.auth.current_user,
    purchase: state.ecom.purchase
})

export default connect(mapStateToProps, {load_purchase_by_id})(PurchaseDetail);