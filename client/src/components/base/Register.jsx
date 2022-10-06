import React, {useState} from 'react'
import '../../styles/App.css'
import Client from '../../services/api'
import { useNavigate } from 'react-router-dom'


const Register = () => {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        first_name: '',
        last_name: '',
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
        // console.log(formData)
    } 

    const handleSubmit = async (e) => {
        e.preventDefault()
        await Client.post('users/create/', {
            email: formData.email,
            first_name: formData.first_name,
            last_name: formData.last_name,
            username: formData.username,
            password: formData.password 
        })
        .then((res) => {
            localStorage.setItem('username', formData.username)
            localStorage.setItem('user_id', res.data.id)
            Client.post('token/obtain/', {
                username: formData.username,
                password: formData.password
            }, {mode: "CORS"})
            .then(res => {
                Client.defaults.headers['Authorization'] = `JWT ${res.data.access}`
                localStorage.setItem('access_token', res.data.access)
                localStorage.setItem('refresh_token', res.data.refresh)
                navigate('/login')
                return res
            })
        })
        .catch(err => console.log(err))
    }    
    
    return(
        <div className="container-fluid">
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={(e) => handleSubmit(e)}>
            <div className="Auth-form-content">
                <h3 className="Auth-form-title">Sign Up</h3>
                <div className="form-group mt-3">
                    <label>First Name</label>
                    <input
                        type="text"
                        className="form-control mt-1"
                        name='first_name'
                        onChange={handleChange}
                        placeholder="Enter your firstname"/>
                </div>
                <div className="form-group mt-3">
                    <label>Last Name</label>
                    <input
                        type="text"
                        name='last_name'
                        className="form-control mt-1"
                        onChange={handleChange}
                        placeholder="Enter your last name"/>
                </div>
                <div className="form-group mt-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        name='email'
                        className="form-control mt-1"
                        onChange={handleChange}
                        placeholder="Enter your email"/>
                </div>
                <div className="form-group mt-3">
                    <label>Username</label>
                    <input
                        type="text"
                        name='username'
                        className="form-control mt-1"
                        onChange={handleChange}
                        placeholder="Choose a username"/>
                </div>
                <div className="form-group mt-3">
                <label>Password</label>
                <input
                    type="password"
                    name='password'
                    className="form-control mt-1"
                    onChange={handleChange}
                    placeholder="Choose a password"
                />
                </div>
                <div className="form-group mt-3">
                <label>Confirm Password</label>
                <input
                    type="password"
                    name='confirmPassword'
                    className="form-control mt-1"
                    onChange={handleChange}
                    placeholder="Confirm password"
                />
                </div>
                <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-outline">
                        Submit
                    </button>
                </div>
            </div>
        </form>
      </div>
      </div>
    )
}

export default Register