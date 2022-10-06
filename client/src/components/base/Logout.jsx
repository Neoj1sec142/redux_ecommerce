import React, {useEffect, useContext} from 'react';
// import { useNavigate } from 'react-router-dom'
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
const Logout = ({manageAuthStats, manageLoginStats}) => {

    const {setLoginStatus} = useContext(LoginContext)
    const logout = async () => {
        await Client.post('users/logout/', {
            refresh_token: localStorage.getItem('refresh_token')
        })
        .then(res => {
            if(res.status){
                setLoginStatus(false)
                manageAuthStats(false)
                manageLoginStats(false)
                return res
            }else{return res}
        })
        .catch(err => {
            return console.log(err)
        })
    }
    useEffect(()=> {
        logout()
        setLoginStatus(false)
        localStorage.removeItem('refresh_token')
        localStorage.removeItem('access_token')
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        localStorage.removeItem('user_id')
    },[])

    return(
        <div>
            <br></br>
            <h2>~ You Have Been Logged Out ~</h2>
            <h3><a href='/'>Click Here</a> to log back in.</h3>
            <br></br>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)