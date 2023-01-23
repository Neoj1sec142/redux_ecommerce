import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { delay } from '../utils/utils'
import {load_user_purchases} from '../store/actions/ecom'

const Dashboard = ({load_user_purchases, current_user, purchases}) => {
  const [loading, setLoading] = useState(true)

  const fetchUserPurchases = async () => {
    const id = JSON.parse(localStorage.getItem('user_id'))
    load_user_purchases(id)
    await delay(750)
    setLoading(false)
  }
  useEffect(() => { if(loading) fetchUserPurchases() },[])
  
  if(!loading && current_user){
    const {username, first_name, last_name, email, date_joined} = current_user
    console.log(purchases, "Purchases")
    return (
      <div className='container-fluid'>

          <div className='d-flex justify-content-start mt-3'>
            <div className='row w-50 shadow-sm bg-light ms-3 m-1 p-2 border'>
              <p className='fs-3 text-center m-1 p-1'>{username ? username : ''}'s' Profile</p>
              <p className='fs-5 ms-3 m-1 p-1'>{first_name}&nbsp;{last_name}</p>
              <p className='fs-5 ms-3 m-1 p-1'>Email: {email}</p>
              <p className='fs-5 ms-3 m-1 p-1'>Date Joined: {date_joined ? date_joined.slice(0,10) : ''}</p>
              <button className='btn btn-primary w-25 m-1'>Update Profile</button>
            </div>
          </div>

          <div className='d-flex justify-content-center mt-2'>
            <div className='row w-75 shadow-sm bg-light p-2 border'>
              <p className='fs-2 text-center'>Purchases</p>
            </div>
          </div>

          {(purchases && purchases.length >= 1) ? (
            purchases.map((item, index) => (
          <div className='d-flex justify-content-center mt-2' key={index}>
            
            <div className='row w-75 shadow-sm bg-light p-2 border position-relative'>
                <a href={`purchase/${item.id}`} className='streched-link'>View Purchase</a>
                <p className='fs-4 text-center'>Items:{item.products.length}&nbsp;&nbsp;|&nbsp;&nbsp;${item.total}.00&nbsp;|&nbsp;{item.date_created ? item.date_created.slice(0, 10) : ''}</p>
            </div>
          </div>
          ))):(
          <div className='d-flex justify-content-center mt-2'>
            <div className='row w-75 shadow-sm bg-light p-2 border'>
            <p className='fs-4 text-center'>No Purchases Yet</p>
            </div>
          </div>
          )}

      </div>
    )
  }else{ return( <div>Loading...</div> ) }
}

const mapStateToProps = state => ({
  current_user: state.auth.current_user,
  purchases: state.ecom.purchases
})

export default connect(mapStateToProps, {load_user_purchases})(Dashboard);