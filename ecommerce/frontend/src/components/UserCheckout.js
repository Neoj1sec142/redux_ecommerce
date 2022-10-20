import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
//  Purchase Model Fields
// total, hashed_card, hased_cv, hashed_exp,
// item_qtys, usr_addr, usr_city, usr_email
//  This page will trigger the hash function securing the userInfo
//      upon the proceed to confirm chekcout
const UserCheckout = ({}) => {

    // FORM CONTROL
    const [card, setCard]= useState({ num: 0, exp: 0, cv: 0 })
    const [user, setUser]= useState({ name: '', addr: '', city: '', state: '' })
    const onUserChange = (e) => {setUser({...user, [e.target.name]: e.target.value})}
    const onCardChange = (e) => {setCard({...card, [e.target.name]: e.target.value})}
    useEffect(() => {
        // load_purchase
    },[])
    useEffect(() => {
        // format purchase
    },[])
    // CHECK UTILS IN HOCS
    return(
        <div className='conatiner'>
            <h1>User Checkout</h1>
            <div className='card'>
                <h3 className='text-centered'>Purchase Items:</h3>
                <p className='text-muted'>items</p>
                <h3 className='text-centered'> Total: $ total</h3>
            </div>
            <form className='form-group'>
                <h3>User Info:</h3>
                <input name='addr' 
                    className='form-control' 
                    placeholder="Street Address"
                    type='text' 
                    onChange={e=>onUserChange(e)}
                    value={user.addr} />
                <input name='city' 
                    className='form-control' 
                    placeholder="Name Here"
                    type='text' 
                    onChange={e=>onUserChange(e)}
                    value={user.city} />
                <input name='state' 
                    className='form-control' 
                    placeholder="ST"
                    type='state' 
                    onChange={e=>onUserChange(e)}
                    value={user.state} />
                <label for="ccname">Name on Card:</label>
                <input id="ccname" 
                    type="text" 
                    className='form-control' 
                    onChange={e=>onUserChange(e)}
                    maxlength="50" 
                    placeholder="Name Here"/>
                <label for="ccn">Credit Card Number:</label>
                <input id="ccn" 
                    type="tel" 
                    inputmode="numeric"
                    className='form-control' 
                    onChange={e=>onCardChange(e)}
                    pattern="[0-9\s]{13,19}" 
                    autocomplete="cc-number" 
                    maxlength="19" 
                    placeholder="xxxx xxxx xxxx xxxx"/>
                <label for="exp">EXP:</label>
                <input id="exp" 
                    type="tel" 
                    className='form-control'
                    inputmode="numeric" 
                    onChange={e=>onCardChange(e)}
                    pattern="[0-9\s]{13,19}" 
                    autocomplete="cc-exp" 
                    maxlength="4" 
                    placeholder="mm/YY"/>
                <label for="cv">CV:</label>
                <input id="cv" 
                    type="tel" 
                    className='form-control'
                    inputmode="numeric" 
                    onChange={e=>onCardChange(e)}
                    pattern="[0-9\s]{13,19}" 
                    autocomplete="cc-cv" 
                    maxlength="3" 
                    placeholder="xxx"/>
            </form>
            <button className='btn btn-primary'>Proceed to Confirm Order</button>
            {/* ^^^ HASH FUNCTION TRIGGERED BY THIS BUTTON ^^^ */}
        </div>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps,{})(UserCheckout)