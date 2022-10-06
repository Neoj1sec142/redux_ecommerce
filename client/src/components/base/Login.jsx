import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom'
import {LoginContext} from '../../services/LoginContext'
import Client from '../../services/api'
import { connect } from 'react-redux';
import { SetAuthStatus, SetLoginStatus } from '../../store/actions/UserActions';

const mapStateToProps = ({ userState }) => {
    return {  userState }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        manageLoginStats: (loginStatus) => dispatch(SetLoginStatus(loginStatus)),
        manageAuthStats: (authStatus) => dispatch(SetAuthStatus(authStatus)),
    }
}

const Login = ({manageAuthStats, manageLoginStats}) => {

    const navigate = useNavigate()
    const {setLoginStatus, loginStatus} = useContext(LoginContext)
    const [login, setLogin] = useState({ username: '', password: '' })

    const handleChange = (e) => {setLogin({...login, [e.target.name]: e.target.value})}

    const handleSubmit = async (e) => {
        e.preventDefault()
        await Client.post('token/obtain/', {
            username: login.username,
            password: login.password
        })
        .then(res => {
            if(res.status === 200){
                Client.defaults.headers['Authorization'] = `JWT ${res.data.access}`
                localStorage.setItem('access_token', res.data.access)
                localStorage.setItem('refresh_token', res.data.refresh)
            }else{return res}
        })
        .then(res => {
            Client.get(`users/${login.username}`)
            .then(res => {
                localStorage.setItem('user_id', res.data.id)
                localStorage.setItem('username', login.username)
                setLoginStatus(true)
                manageAuthStats(res.data.is_staff)
                manageLoginStats(loginStatus)
                navigate('/')
            })
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={(e) => handleSubmit(e)}>
                <div className="Auth-form-content">
                <h3 className="Auth-form-title">Sign In</h3>
                <div className="form-group mt-3">
                    <label>Username</label>
                    <input
                    type="text"
                    name='username'
                    onChange={handleChange}
                    className="form-control mt-1"
                    placeholder="Enter username"
                    />
                </div>
                <div className="form-group mt-3">
                    <label>Password</label>
                    <input
                    type="password"
                    name='password'
                    onChange={handleChange}
                    className="form-control mt-1"
                    placeholder="Enter password"
                    />
                </div>
                <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-outline">
                    Submit
                    </button>
                </div>
                <p className="forgot-password text-right mt-2" style={{color:'white'}}> 
                    Don't Have an Account? <a href="/register" >Register</a>
                </p>
                </div>
            </form>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)