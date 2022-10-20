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
        <div>
            <h1>Review Your Order:</h1>
            <p className='text-muted'>{purchase}</p>
            <h3>Total: ${total}</h3>
            <h3 className="text">Billing Information:</h3>
            <article>
                <h3 className='text-centered'>Billing Info</h3>
                <p className='text-centered'>
                    Name: {userInfo.name}
                    Street: {userInfo.addr}
                    City: {userInfo.city}
                    State: {userInfo.state}
                    Card: {processed.num}
                    EXP: {processed.exp}
                    CV: {processed.cv}
                </p>
            </article>
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