import React, { Fragment, useState, useEffect } from 'react'
import Dash from '../components/base/DashBar'
import UpdateProfile from '../components/profile/UpdateProfile'
import MyPayments from '../components/profile/MyPayments'
import MyOrders from '../components/profile/MyOrders'
import ReviewedItems from '../components/profile/ReviewedItems'

const Dashboard = () => {
  const [inEffect, setInEffect] = useState(null)
  const [selected, setSelected] = useState('')
  const [loading, setLoading] = useState(false)
  const fecthData = async () => {}
  useEffect(() => {
    switch(selected){
      case 'orders':
        setInEffect(<MyOrders />)
        break;
      case 'update':
        setInEffect(<UpdateProfile />)
        break;
      case 'payments':
        setInEffect(<MyPayments />)
        break;
      default:
        setInEffect(<ReviewedItems />)
        break;
    }
  },[selected])
  if(!loading){
    return (
      <Fragment>
        <div className='fixed-top mt-5'>
          <Dash setSelected={setSelected} />
        </div>
        <div className='container-fluid w-75 profile-container fixed-top mt-5'>Dashboard
          {inEffect}
        </div>
      </Fragment>
    )
  }else{ return( <div>Loading...</div> ) }
}

export default Dashboard