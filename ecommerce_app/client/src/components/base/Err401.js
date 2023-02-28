import React from 'react'

const Err401 = () => {
  return (
    <div className='container-fluid'>
        <div className='d-flex justify-content-center mt-5 mb-5'>
            <div className='row shadow-sm mt-2 mb-2 w-75'>
                <p className='fs-3 text-center'>Oops!! It looks like you wandered to restricted page 👀</p>
                <p className='fs-6 text-muted'>This page is for authorized staff members only. Please <a href='/'>CLICK HERE</a> to return to the fun!</p>
            </div>
        </div>
    </div>
  )
}

export default Err401