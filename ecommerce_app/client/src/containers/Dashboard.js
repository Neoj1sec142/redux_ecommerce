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
        setInEffect(<MyOrders setSelected={setSelected} />)
        break;
      case 'update':
        setInEffect(<UpdateProfile setSelected={setSelected} />)
        break;
      case 'payments':
        setInEffect(<MyPayments setSelected={setSelected} />)
        break;
      default:
        setInEffect(<ReviewedItems setSelected={setSelected} />)
        break;
    }
  },[selected])
  if(!loading){
    return (
      <Fragment>
        <div className='container-fluid w-75 profile-container mt-5 mb-5 overflow-auto' height="200">Dashboard
          {inEffect}
        </div>
        <div className='fixed-top mt-5'>
          <Dash setSelected={setSelected} />
        </div>
      </Fragment>
    )
  }else{ return( <div>Loading...</div> ) }
}

export default Dashboard