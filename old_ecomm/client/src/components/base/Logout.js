import React, {useEffect} from 'react'
import {logout} from '../../store/actions/auth'
import { connect } from 'react-redux';
const Logout = ({logout}) => {
  useEffect(() => { logout() },[])

  return (
    <div className='container-fluid'>
      <div className='d-flex justify-content-center mt-3'>
        <div className='row w-75 bg-light shadow-sm m-1'>
          <p className='fs-2 text-center'>You Have Been Logged Out!</p>
          <p className='fs-5 text-center'>Thank you for shopping with us! We hope to see you again soon!</p>
          <p className='fs-4 text-center'><a href='/'>Click Here </a> to Login Again.</p>
        </div>
      </div>
    </div>
  )
}

export default connect(null, {logout})(Logout);