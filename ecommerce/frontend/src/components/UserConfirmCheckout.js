import React from 'react'
//  After procceed to user info and payment info
//  This page will NOT trigger the hash function securing the userInfo
// MAKE SURE TO CHANGE THE CORNFIRM SAVES TO NOT SAVE VULNERABLE INFO

const UserConfirmCheckout = () => {
    return(
        <div>
            <h1>Review Your Order:</h1>
            <p className='text-muted'>items and qty</p>
            <h3 className="text">Billing Information:</h3>
            <article>
                Billing Info
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

export default UserConfirmCheckout