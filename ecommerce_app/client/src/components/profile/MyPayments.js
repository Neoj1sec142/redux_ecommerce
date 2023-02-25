import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { delay } from '../../utils/utils'
import {load_payment_methods, destory_pm} from '../../store/actions/paymentMethod'

const MyPayments = ({load_payment_methods, destory_pm, current_user, paymentMethods, setSelected}) => {
  const [loading, setLoading] = useState(true)
  const fetchData = async () => {
    const id = current_user.id;
    load_payment_methods(id)
    await delay(750)
    setLoading(false)
  }
  useEffect(() => {if(loading && current_user && current_user.id) fetchData()},[])
  
  const handleDelete = async e => {
    e.preventDefault()
    const id = e.target.value
    destory_pm(id)
    setLoading(true)
    await delay(750)
    fetchData()
  }

  if(!loading){
    return (
      <div className='container-fluid'>
        <p className='fs-4 text-center mt-5'>Payment Methods</p>
        <div className='d-flex justify-content-center mt-2 mb-2'>
          <div className='row w-75 shadow-sm p-3'>
            <ul className='list-group mt-1 mb-1'>
              {paymentMethods && paymentMethods.length >= 1 ? (
                paymentMethods.map((item, index) => (
              <li className='list-group-item' key={index}>
                <div className='row'>
                  <div className='col w-50 text-center mt-1 mb-1 float-start'>
                    <p className='fs-7'>{item.description} | Exp: {item.expiration_mon} {item.expiration_year}</p>
                  </div>
                  <div className='col w-50 mt-1 mb-1 float-end'>
                    <div className='d-flex justify-content-evenly'>
                      <button className='btn btn-sm btn-primary w-25'>
                      <i class="fa-light fa-plus"></i>
                      </button>
                      <button value={item.id} className='btn btn-sm btn-danger w-25' 
                        onClick={e=>(e.target.value && handleDelete(e))} >
                        <i class="fa fa-trash w-75" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </li>)))
              :<li className='list-group-item'>
                <div className='row'>
                  <div className='col w-50 text-center'>
                    <p className='fs-7'>No Payment Methods</p>
                  </div>
                  <div className='col w-50'>
                    <div className='d-flex justify-content-center'>
                      <button onClick={()=>setSelected('add-payment')} className='btn btn-sm btn-primary w-75'>Add Payment</button>
                    </div>
                  </div>
                </div>
              </li>}
            </ul>
          </div>
        </div>
      </div>
    )
  }else{ return( <div>Loading...</div> ) }
}

const mapStateToProps = state => ({
  current_user: state.auth.current_user,
  paymentMethods: state.paymentMethod.paymentMethods
})

export default connect(mapStateToProps, {load_payment_methods, destory_pm})(MyPayments);