import React from 'react'

const Err404 = () => {
    
    return (
        <div className='container-fluid'>
            <div className='d-flex justify-content-center mt-3'>
                <div className='row w-75 bg-light border shadow-sm p-3'>
                    <p className='fs-2 text-center'>Error 404! Page not found! 🧐</p>
                    <p className='fs-7'>Sorry about that but the page you're looking for seems to be missing. <a href='/'>Click Here </a> to find your way back home.</p>
                </div>
            </div>
        </div>
    )
}
export default Err404