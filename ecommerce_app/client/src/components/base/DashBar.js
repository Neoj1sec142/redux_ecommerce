import React, {useState} from 'react'

const Dash = () => {
    const [dashOpen, setDashOpen] = useState(false)
    const handleChange = e => {
        e.preventDefault()
        setDashOpen(!dashOpen)
    }
    const dashBtn = (
        <div className='container w-25 float-start'>
            <div className='d-flex justify-content-center mt-3'>
                <button onClick={handleChange} className='btn btn-primary w-50'>Dash</button>
            </div>
        </div>
    )
    const dashBoard = (
        <div className='container w-25 float-start'>
            <p className='w-75'>Header</p><button onClick={handleChange} className='btn btn-secondary w-25'>❌</button>
            <hr className='divider' />
            <ul className='list-group'>
                <li className='list-group-item'>Something</li>
            </ul>
            <div className='fixed-bottom'>
                <div className='d-flex justify-content-center'>
                    <div className='row w-75 shadow-sm m-2'>
                        Footer
                    </div>
                </div>
            </div>
        </div>
    )
    if(dashOpen){
        return (
            {dashBoard}
        )
    }else{ return( {dashBtn} ) }
}
export default Dash;

export 