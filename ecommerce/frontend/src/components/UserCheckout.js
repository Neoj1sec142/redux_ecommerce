import React, { useEffect } from 'react'
//  Purchase Model Fields
// total, hashed_card, hased_cv, hashed_exp,
// item_qtys, usr_addr, usr_city, usr_email
//  This page will trigger the hash function securing the userInfo
//      upon the proceed to confirm chekcout
const UserCheckout = () => {
    useEffect(() => {
        // load_purchase
    },[])
    useEffect(() => {
        // format purchase
    },[])
    // CHECK UTILS IN HOCS
    return(
        <div>
            <h1>User Checkout</h1>
            <button className='btn btn-primary'>Proceed to Confirm Order</button>
            {/* ^^^ HASH FUNCTION TRIGGERED BY THIS BUTTON ^^^ */}
        </div>
    )
}
export default UserCheckout