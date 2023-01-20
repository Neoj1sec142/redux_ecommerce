import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {load_products} from '../store/actions/ecom'
import {delay} from '../utils/utils'
import ProductCard from '../components/browsing/ProductCard'

const Browsing = ({load_products, products}) => {
  const [loading, setLoading] = useState(true)
  const [catagory, setCatagory] = useState('')
  const fecthData = async () => {
    if(catagory === ''){
      load_products()
      await delay(750)
      setLoading(false)
    }else{
      // load_products_by_catagory(catagory)
      // await delay(750)
      // setLoading(false)
    }
  }
  useEffect(() => { if(loading) fecthData() },[])

  if(!loading){
    return (
      <div className='container-fluid'>
        <div className='d-flex justify-content-center mt-3'>
          <div className='row w-75 shadow-sm border bg-warning m-1'>
            <div className='d-flex justify-content-center m-3'>
              <div className='row w-75 bg-light shadow-sm border'>
                <div className='col w-50'>
                  <div className='form-control'>
                    <input type='radio' className='form-radio' name='cat1' value="cat1" />
                    <input type='radio' className='form-radio' name='cat2' value="cat2" />
                    <input type='radio' className='form-radio' name='cat3' value="cat3" />
                  </div>
                </div>
                <div className='col w-50'>
                  <select className='form-control' name="catSel" value="catSel">
                    <option>Cat1</option>
                    <option>Cat2</option>
                    <option>Cat3</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-center mt-3'>
          <div className='row w-75 shadow-sm border bg-light m-1'>
            {products.length >= 1 ? (
              products.map((item, index) => (
            <div className='d-flex justify-content-center m-2' key={index}>
              <ProductCard item={item} />
            </div>))) : null}
          </div>
        </div>
      </div>
    )
  }else{ return( <div>Loading....</div> ) }
}

const mapStateToProps = state => ({
  products: state.ecom.products
})

export default connect(mapStateToProps, {load_products})(Browsing);