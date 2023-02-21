import React, { useState } from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {login} from '../../store/actions/auth'
import {delay} from '../../utils/utils'

const Login = ({login, setPage}) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const {username, password} = formData;
  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
  const onSubmit = async e => {
    e.preventDefault()
    login(formData)
    await delay(750)
    navigate('/')
  }
  const cancel = e => {
    e.preventDefault()
    if(window.confirm("Clear Data?")){
      setFormData({username: '', password: ''})
    }
  }
  return (
    <div className='container-fluid'>
      <div className='d-flex justify-content-center mt-3'>
        <div className='row w-75 shadow-sm border bg-light mt-3'>
          <p className='fs-2 text-center mt-2'>Login</p>
        </div>
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <div className='row w-75 shadow-sm border bg-light mt-3'>
          <form onSubmit={e=>onSubmit(e)}>
            <div className='form-group m-3'>
              <input className='form-control'
                placeholder='Username*'
                maxLength={100}
                name='username'
                type='text'
                value={username}
                onChange={e=>onChange(e)}
                required />
            </div>
            <div className='form-group m-3'>
              <input className='form-control'
                  placeholder='Password*'
                  maxLength={100}
                  name='password'
                  type='password'
                  value={password}
                  onChange={e=>onChange(e)}
                  required />
            </div>
            <div className='d-flex justify-content-center'>
              <div className='col w-50 m-1'>
                <button type='Submit' className='btn btn-primary m-1 w-100'>Login</button>
              </div>
              <div className='col w-50 m-1'>
                <button onClick={e=>cancel(e)} className='btn btn-danger m-1 w-100'>Cancel</button>
              </div>
            </div>
          </form>
          <div className='d-flex justify-content-center'>
            <p className='mt-2'>Already have an account? <button className='link-btn' onClick={()=>setPage('signup')}>Click Here</button> to login!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(null, {login})(Login);