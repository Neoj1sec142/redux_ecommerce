import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { register } from '../store/actions/auth'
import CSRFToken from '../components/CSRFToken'

const Register = ({register, isAuthenticated}) => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        re_password: ''
    })

    const [accountCreated, setAccountCreated] = useState(false)
    
    const { username, password, re_password } = formData
    
    const onChange = (e) => {setFormData({...formData, [e.target.name]: e.target.value})}

    const onSubmit = (e) => {
        e.preventDefault()
        if(password === re_password){
            register(username, password, re_password)
            setAccountCreated(true)
        }
    }

    if(isAuthenticated){
        return navigate('/profile')
    }
    if(accountCreated){
        return navigate('/')
    }

    return(
        <div className='container mt-5'>
            <h1>Register for an Account</h1>
            <p>Create an account with Some Commerce</p>
            <form onSubmit={e => onSubmit(e)}>
                <CSRFToken />
                <div className='form-group'>
                    <label className='form-label'>Username: </label>
                    <input className='form-control'
                        type='text'
                        placeholder='Username*'
                        name='username'
                        value={username}
                        onChange={e => onChange(e)}
                        required />
                </div>
                <div className='form-group mt-3'>
                    <label className='form-label'>Password: </label>
                    <input className='form-control'
                        type='password'
                        placeholder='Password*'
                        name='password'
                        value={password}
                        minLength='6'
                        onChange={e => onChange(e)}
                        required />
                </div>
                <div className='form-group mt-3'>
                    <label className='form-label'>Confirm Password: </label>
                    <input className='form-control'
                        type='password'
                        placeholder='Confirm Password*'
                        name='re_password'
                        value={re_password}
                        minLength='6'
                        onChange={e => onChange(e)}
                        required />
                </div>
                <button className='btn btn-primary mt-3' type='submit'>Register</button>
            </form>
            <p className='mt-3'>Already have an account? <Link to='/login'>Click Here</Link> to log in</p>
        </div>
    )
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, {register})(Register)