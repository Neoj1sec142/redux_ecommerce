import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import Cart from './Cart'

const CartContainer = () => {
    const [open, setOpen] = useState(false)
    if(!open){
        return (
        <div className='float-end fixed-top sidebtn'>
            <button onClick={()=>setOpen(!open)}><i className='fas fa-shopping-cart'></i></button>
        </div>
        )
    }else{
        return(
        <div className='float-end fixed-top w-25 border sidebar bg-light'>
            <Cart setOpen={setOpen}  open={open} />
        </div>
        )
    }
}

export default connect(null, {})(CartContainer)