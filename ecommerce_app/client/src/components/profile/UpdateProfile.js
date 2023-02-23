import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {update_user} from '../../store/actions/auth'
import { delay, getLocation } from '../../utils/utils'
const stateData = require("../base/stateData.json")

const UpdateProfile = ({update_user, load_current, current_user, setSelected}) => {
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    password: ''
  })
  const handleLoad = () => {
    setFormData({
      first_name: current_user.first_name || "",
      last_name: current_user.last_name || "",
      email: current_user.email || "",
      address: current_user.address || "",
      city: current_user.city || "",
      state: current_user.state || "",
      zip: current_user.zip || "",
    })
    setLoading(false)
  }
  useEffect(() => {if(current_user?.id) handleLoad()},[])
  const {first_name, last_name, email, address, city, state, zip, password} = formData;
  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
  const onSubmit = async e => {
    e.preventDefault()
    const id = current_user.id;
    let userForm = current_user;
    const loc = getLocation(address, city, state, zip)
    userForm.location = loc;
    userForm.first_name = first_name;
    userForm.last_name = last_name;
    userForm.email = email;
    userForm.password = password;
    update_user(id, userForm)
    await delay(750)
    setSelected('')
  }

  const cancel = e => {
    e.preventDefault()
    setFormData({
      first_name: '',
      last_name: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      password: ''
    })
  }

  if(!loading){
    return (
      <div className='container-fluid'>
        <div className='d-flex justify-content-center mt-5 mb-5'>
          <div className='row w-75 shadow-sm p-3 mb-5'>
            <form onSubmit={e=>onSubmit(e)}>
              <div className='form-group mt-1 mb-1'>
                <label htmlFor='#first-n' className='form-label'>First Name</label>
                <input className='form-control' 
                  id='first-n' value={first_name}
                  onChage={e=>onChange(e)} 
                  placeholder={current_user.first_name || 'First Name'}
                  name='first_name' type='text' />
              </div>
              <div className='form-group mt-1 mb-1'>
                <label htmlFor='#last-n' className='form-label'>Last Name</label>
                <input className='form-control' 
                  value={last_name} name='last_name' 
                  placeholder={current_user.last_name || 'Last Name'}
                  onChage={e=>onChange(e)} 
                  type='text' id='last-n' />
              </div>
              <div className='form-group mt-1 mb-1'>
                <label htmlFor='#email' className='form-label'>Email</label>
                <input className='form-control' 
                  id='email' value={email} 
                  onChage={e=>onChange(e)} 
                  placeholder={current_user.email || 'jSmith123@aol.com'}
                  name='email' type='email' />
              </div>
              <div className='form-group mt-1 mb-1'>
                <label htmlFor='#addy' className='form-label'>Address</label>
                <input className='form-control' 
                  id="addy" value={address} 
                  placeholder='123 Fake Street'
                  onChage={e=>onChange(e)} 
                  name='address' type='text' />
              </div>
              <div className='form-group mt-1 mb-1'>
                <label htmlFor='#city' className='form-label'>City</label>
                <input className='form-control' 
                  id='city' value={city} 
                  onChage={e=>onChange(e)} 
                  placeholder='Chicago'
                  name='city' type='text' />
              </div>
              <div className='form-group mt-1 mb-1'>
                <select className='form-control' name="state" onChage={e=>onChange(e)}>
                  {stateData.map((item, index) => (
                  <option key={index}>{item}</option>))}
                </select>
              </div>
              <div className='form-group mt-1 mb-1'>
                <label htmlFor='#zip' className='form-label'>Zip</label>
                <input className='form-control' 
                  id="zip" value={zip} 
                  onChage={e=>onChange(e)} 
                  placeholder='00000'
                  name='zip' type='zipcode' />
              </div>
              <div className='form-group mt-1 mb-5'>
                <label htmlFor='#pswd' className='form-label'>Password</label>
                <input className='form-control' 
                  id="pswd" value={password} 
                  onChage={e=>onChange(e)}
                  placeholder='****'
                  name='password' type='password' required />
              </div>
              <div className='d-flex justify-content-evenly'>
                <button type='submit' className='btn btn-sm btn-success w-25'>Submit</button>
                <button onClick={e=>cancel(e)} className='btn btn-sm btn-danger w-25'>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }else{ return( <div>Loading...</div> ) }
}

const mapStateToProps = state => ({
  current_user: state.auth.current_user
})

export default connect(mapStateToProps, {update_user})(UpdateProfile);