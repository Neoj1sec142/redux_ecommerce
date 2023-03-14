import React, {useState} from 'react'

const Dash = ({setSelected}) => {
    const [dashOpen, setDashOpen] = useState(false)
    const handleChange = e => {
        e.preventDefault()
        setDashOpen(!dashOpen)
    }
    const dashBtn = (
        <div className='container w-25 dash-container'>
            <div className='d-flex justify-content-center mt-3'>
                <button onClick={handleChange} className='btn btn-primary w-50'>Dash</button>
            </div>
        </div>
    )
    const dashBoard = (
        <div className='container w-25 dash-container'>
            <p className='w-75'>Header</p><button onClick={handleChange} className='btn btn-secondary w-25'>❌</button>
            <hr className='divider' />
            <div className='d-flex justify-content-center mt-3'>
                <ul className='list-group w-75'>
                    <li className='list-group-item mt-1'><button onClick={()=>setSelected('update')}>Update User Info</button></li>
                    <li className='list-group-item mt-1'><button onClick={()=>setSelected('payments')}>Payment Option</button></li>
                    <li className='list-group-item mt-1'><button onClick={()=>setSelected('add-payment')}>Add Payment Option</button></li>
                    <li className='list-group-item mt-1'><button onClick={()=>setSelected('')}>Back to Profile</button></li>
                    <li className='list-group-item mt-1'><a href='/'>Browse Store</a></li>
                    <li className='list-group-item mt-1'><a href='/checkout'>Checkout</a></li>
                </ul>
            </div>
            <div className='fixed-bottom'>
                <div className='d-flex justify-content-center'>
                    <div className='row w-75 shadow-sm m-2'>
                        @ReduxCommerce
                    </div>
                </div>
            </div>
        </div>
    )
    if(dashOpen){ 
        return ( <div>{dashBoard}</div> )
    }else{ return( <div>{dashBtn}</div> ) }
}
export default Dash;