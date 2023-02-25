import React from 'react'

const Checkout = () => {

  return (
    <div className='container-fluid'>
      <div className='d-flex justify-content-center mt-5 mb-1'>
        <div className='row w-75 shadow-sm p-3'>
          Checkout Banner
        </div>
      </div>
      <div className='d-flex justify-content-center mt-5 mb-1'>
        <div className='row w-75 shadow-sm p-3'>
          Checkout Items Mapped
        </div>
      </div>
      <div className='d-flex justify-content-center mt-5 mb-1'>
        <div className='row w-75 shadow-sm p-3'>
          Checkout Summary w/ buttons & select mapping payment opts or button to add payment opt
          or also button to add payment opt as a guest
        </div>
      </div>
    </div>
  )
}

export default Checkout