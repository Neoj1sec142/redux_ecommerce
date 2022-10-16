import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { update_profile } from '../actions/profile'
import { delete_account } from '../actions/auth'

const Dashboard = ({
    delete_account, update_profile, 
    first_name_global, last_name_global, 
    phone_global, city_global
}) => {
    
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '', 
        phone: '',
        city: ''
    })
    
    const { first_name, last_name, phone, city } = formData
    
    useEffect(() => {
        setFormData({
            first_name: first_name_global,
            last_name: last_name_global, 
            phone: phone_global,
            city: city_global
        })
        
    },[
        first_name_global, last_name_global,
        phone_global, city_global
    ])

    const onChange = (e) => {setFormData({...formData, [e.target.name]: e.target.value})}

    const onSubmit = (e) => {
        e.preventDefault()
        update_profile(first_name, last_name, phone, city)
        
    }
    

    return(
        <div className='container'>
            <h1 className='mt-3'>Welcome to your User Dashboard</h1>
            <p className='mt-3 mb-3'>Update your user profile below:</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <label htmlFor='first_name' className='form-label'>First Name</label>
                    <input className='form-control'
                        type='text'
                        name='first_name'
                        onChange={e => onChange(e)}
                        value={first_name}
                        placeholder={`${first_name_global}`}
                    />
                </div>
                <div className='form-group mt-3'>
                    <label htmlFor='last_name' className='form-label'>Last Name</label>
                    <input className='form-control'
                        type='text'
                        name='last_name'
                        onChange={e => onChange(e)}
                        value={last_name}
                        placeholder={`${last_name_global}`}
                    />
                </div>
                <div className='form-group mt-3'>
                    <label htmlFor='phone' className='form-label'>Phone</label>
                    <input className='form-control'
                        type='text'
                        name='phone'
                        onChange={e => onChange(e)}
                        value={phone}
                        placeholder={`${phone_global}`}
                    />
                </div>
                <div className='form-group mt-3'>
                    <label htmlFor='city' className='form-label'>City</label>
                    <input className='form-control'
                        type='text'
                        name='city'
                        onChange={e => onChange(e)}
                        value={city}
                        placeholder={`${city_global}`}
                    />
                </div>
                
                <button className='btn btn-primary mt-3' type='submit'>Update Profile</button>
            </form>
            <p className='mt-3'>Click the button below to delete your account</p>
            <a className='btn btn-danger mt-3' href='#!' onClick={delete_account}>Delete Account</a>
        </div>
    )
}

const mapStateToProps = state => ({
    first_name_global: state.profile.first_name,
    last_name_global: state.profile.last_name,
    phone_global: state.profile.phone,
    city_global: state.profile.city
})

export default connect(mapStateToProps, {
    delete_account, 
    update_profile
})(Dashboard)