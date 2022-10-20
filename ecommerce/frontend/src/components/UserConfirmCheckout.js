import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {confirm_restore} from '../store/actions/purchase'
//  After procceed to user info and payment info
//  This page will NOT trigger the hash function securing the userInfo
// MAKE SURE TO CHANGE THE CORNFIRM SAVES TO NOT SAVE VULNERABLE INFO

const UserConfirmCheckout = ({
    confirm_restore, total, purchase,
    userInfo, processed
}) => {
    useEffect(() => {
        confirm_restore()
    },[])

    return(
        <div className='container'>
            <br/>
            <div className='card'>
                <h1 className='text-center'>Review Your Order:</h1>
                <p className='text-muted'>{purchase}</p>
                <h3 className='text-center'>Total: ${total}</h3>
            </div>
            <br/>
            <div className='card'>
                <h3 className="text">Billing Information:</h3>
                <article>
                    <h5>Name: {userInfo.name}</h5>
                    <h5>Street: {userInfo.addr}</h5>
                    <h5>City: {userInfo.city}</h5>
                    <h5>State: {userInfo.state}</h5>
                    <h5>Card: {processed.num}</h5>
                    <h5>EXP: {processed.exp}</h5>
                    <h5>CV: {processed.cv}</h5>
                </article>
            </div>
            <br/>
            <div className='row'>
                <div className='col'>
                    <button className='btn btn-primary'>Submit</button>
                </div>
                <div className='col'>
                    <button className='btn btn-danger'>Cancel</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    total: state.purchase.total,
    purchase: state.purchase.purchase,
    userInfo: state.purchase.userInfo,
    processed: state.purchase.processed
})

export default connect(mapStateToProps, {confirm_restore})(UserConfirmCheckout)