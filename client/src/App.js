/// SERVICES //
import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import LoginContext from './services/LoginContext.jsx'
import Client from './services/api'
import { SetLoginStatus, SetAuthStatus } from './store/actions/UserActions.js'
// PAGES / COMPONENTS //
import Register from './components/base/Register'
import Login from './components/base/Login'
import Logout from './components/base/Logout'
import Main from './pages/main'
// STYLES //
import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css';

const mapStateToProps = ({ userState }) => {
  return {  userState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    manageLoginStats: (loginStatus) => dispatch(SetLoginStatus(loginStatus)),
    manageAuthStats: (authStatus) => dispatch(SetAuthStatus(authStatus)),
  }
}

const App = ({manageAuthStats, manageLoginStats}) => {
  const [loginStatus, setLoginStatus] = useState(false)
  const [authStatus, setAuthStatus] = useState(false)
  const [user, setUser] = useState({})
  useEffect(() => {
    const user_id = localStorage.getItem('user_id')
    const username = localStorage.getItem('username')
    setUser({...user, user_id, username})
    if(user_id && username){
      if(loginTest(username)) setLoginStatus(true)
    }else setLoginStatus(false)
  }, [loginStatus])
  

  const loginTest = async (username) => {
    await Client.get(`users/${username}`)
    .then(res => {
      if (res.status === 200){
        // console.log(res.data, 'dta')
        setAuthStatus(res.data.is_staff)
        manageAuthStats(authStatus)
        setLoginStatus(true)
        manageLoginStats(loginStatus)
        return true
      }else{
        setLoginStatus(false)
        return false
      }
    })
    .catch(err => {
      setLoginStatus(false)
      console.log(err, "ERROR HERE")
    })
  }
  return (
    <div>
      <LoginContext.Provider value={{loginStatus, setLoginStatus, user, setUser, authStatus}}>
      <header>
        
      </header>
      <Routes>
        {loginStatus
        ? <Route path='/' element={<Main/>}/>
        : <Route path='/' element={<Login/>}/>}
        <Route path='/register' element={<Register />}/>
        <Route path='/logout' element={<Logout />}/>
      </Routes>
      </LoginContext.Provider>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
