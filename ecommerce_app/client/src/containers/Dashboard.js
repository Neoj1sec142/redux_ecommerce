import React, { Fragment, useState, useEffect } from 'react'
import {connect} from 'react-redux'
import { load_userprofile } from '../store/actions/auth'
import { delay } from '../utils/utils'
import Dash from '../components/base/DashBar'
import UpdateProfile from '../components/profile/UpdateProfile'
import MyPayments from '../components/profile/MyPayments'
import MyOrders from '../components/profile/MyOrders'
import ReviewedItems from '../components/profile/ReviewedItems'
import NewPaymentMethod from '../components/profile/NewPaymentMethod'

const Dashboard = ({load_userprofile, userProfile, current_user}) => {
  const [selected, setSelected] = useState('')
  const [inEffect, setInEffect] = useState(<ReviewedItems setSelected={setSelected} />)
  const [loading, setLoading] = useState(false)
  
  const fecthData = async (opt="") => {
    const id = current_user.id;
    switch(opt){
      case "reviews":
        load_userprofile(id)
        await delay(750)
        setLoading(false)
        break;
      case "orders":
        setLoading(false)
        break;
      default:
        setLoading(false)
        break;
    }
  }
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
      case 'add-payment':
        setInEffect(<NewPaymentMethod setSelected={setSelected} />)
        break;
      default:
        fecthData("reviews")
        setInEffect(<ReviewedItems
          fecthData={fecthData}
          setSelected={setSelected} />)
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

const mapStateToProps = state => ({
  userProfile: state.auth.userProfile,
  current_user: state.auth.current_user
})

export default connect(mapStateToProps, {load_userprofile})(Dashboard);