import React from 'react'
import { connect } from 'react-redux'
import {load_products} from '../store/actions/ecom'
const Browsing = ({load_products, products}) => {
  
  return (
    <div className='container-fluid'>
      <div className='d-flex justify-content-center mt-3'>
        <div className='row w-75 shadow-sm border bg-light m-1'>
          Browse Filtering Section
        </div>
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <div className='row w-75 shadow-sm border bg-light m-1'>
          Browsing Section
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  products: state.ecom.products
})

export default connect(mapStateToProps, {load_products})(Browsing);